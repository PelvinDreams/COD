"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const [role, setRole] = useState<"user" | "buyer">("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Role Selection */}
        <div className="flex gap-4 mb-6">
          <Button
            onClick={() => setRole("user")}
            className={`w-1/2 ${role === "user" ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Sign Up as User
          </Button>
          <Button
            onClick={() => setRole("buyer")}
            className={`w-1/2 ${role === "buyer" ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Sign Up as Buyer
          </Button>
        </div>

        {/* Sign-Up Form */}
        <form className="space-y-4">
          <Input type="text" placeholder="Full Name" required />
          <Input type="email" placeholder="Email Address" required />
          <Input type="password" placeholder="Password" required />
          
          {role === "buyer" && (
            <Input type="text" placeholder="Company Name (Optional)" />
          )}

          <Button type="submit" className="w-full bg-primary text-white">
            Create Account
          </Button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-primary">Log in</a>
        </p>
      </div>
    </div>
  );
}
