"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
const Form = () => {
  const t = useTranslations('ContactPage')
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = t('emailError');
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = t('emailFormat');

    if (!name) newErrors.name = t('nameError');
    if (!message) newErrors.message = t('messageError');

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
    } else return;
    const jsonData = {
      name,
      email,
      message,
      link: "none",
      property: "none",
    };
    ///client
    try {
      await fetch("api/property/emails", {
        method: "POST",
        body: JSON.stringify(jsonData),
      });
    } catch (error) {
      console.log(error, "error");
    }

    ///owner
    try {
      const res = await fetch("api/property/emails/owner", {
        method: "POST",
        body: JSON.stringify(jsonData),
      });
      console.log(res);
    } catch (error) {
      console.log("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      window.location.reload();
    }
  };

  return (
    <Card className="bg-white border w-full max-w-md rounded-xl overflow-hidden backdrop-blur-sm bg-opacity-95">
      <CardHeader className=" p-6 border-b">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Mail className="h-5 w-5 text-amber-600" />
          {t('heading2')}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label
              htmlFor="email"
              className={`text-sm font-medium ${errors.email ? "text-red-500" : "text-gray-700"}`}
            >
              {t('email')}{" "}
              {errors.email && (
                <span className="text-sm font-normal">({errors.email})</span>
              )}
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 ${errors.email ? "border-red-500 ring-red-500" : "border-gray-300"}`}
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className={`text-sm font-medium ${errors.name ? "text-red-500" : "text-gray-700"}`}
            >
              {t('name')}{" "}
              {errors.name && (
                <span className="text-sm font-normal">({errors.name})</span>
              )}
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 ${errors.name ? "border-red-500 ring-red-500" : "border-gray-300"}`}
            />
          </div>
          <div>
            <Label
              htmlFor="message"
              className={`text-sm font-medium ${errors.message ? "text-red-500" : "text-gray-700"}`}
            >
              {t('message')}{" "}
              {errors.message && (
                <span className="text-sm font-normal">({errors.message})</span>
              )}
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`${t('yourMessage')}...`}
              className={`resize-none min-h-[120px] mt-1 ${errors.message ? "border-red-500 ring-red-500" : "border-gray-300"}`}
            />
          </div>
          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Siunčiama...
                </span>
              ) : (
                `${t('sendMessage')}`
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
export default Form;
