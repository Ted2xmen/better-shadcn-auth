"use server"

import { db } from "@/db";
import { profile } from "@/db/schema";
import { auth } from "@/lib/auth";
import { routes } from "@/lib/config";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn({ email, password, callbackUrl }: { email: string, password: string, callbackUrl?: string }) {
  try {
    const result = await auth.api.signInEmail({
      body: {
        email,
        password,
        callbackURL: callbackUrl || "/",
      },
    });

    if (!result.redirect) {
      throw new Error("Failed to sign in");
    }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message || "An error occurred during sign in");
  }

  revalidatePath("/");
  redirect("/");
}

export async function signUp({ email, password, name }: { email: string, password: string, name: string }) {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name
      },
    });

    if (!result) {
      throw new Error("Failed to sign up");
    }

    if (result?.user?.id) {
      await createProfileForUser(result?.user?.id);
    }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message || "An error occurred during sign up");
  }

  revalidatePath("/");
  redirect("/");
}

async function createProfileForUser(userId: string) {
  if (!userId) {
    return;
  }

  const now = new Date();
  return await db.insert(profile).values({
    id: userId,
    userId,
    isPublic: true,
    createdAt: now,
    updatedAt: now,
  });

}

export const signOut = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message || "An error occurred during sign out");
  }
  revalidatePath("/");
  redirect(routes.login);
}

export const getServerSession = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};