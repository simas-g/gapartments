"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPinned } from "lucide-react";
import { useTranslations } from "next-intl";
const Contact = ({ prop = "none", setOpenContact }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("ContactPage");
  const validate = () => {
    const newErrors = {};

    if (!email) newErrors.email = t("emailError");
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t("emailFormat");
    if (!number) {
      newErrors.number = t("numberError");
    }
    if (!name) newErrors.name = t("nameError");
    if (!message) newErrors.message = t("messageError");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonData = {
      name,
      message,
      link: prop.id,
      property: prop.title,
      email,
      number,
    };
    if (!validate()) return;

    setIsSubmitting(true);

    {
      /*Client*/
    }
    try {
      const res = await fetch("api/property/emails", {
        method: "POST",
        body: JSON.stringify(jsonData),
      });
      console.log(res);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }

    {
      /*Owner*/
    }
    try {
      const res2 = await fetch("api/property/emails/owner", {
        method: "POST",
        body: JSON.stringify(jsonData),
      });
      console.log(res2);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      setOpenContact(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-90 bg-black/50 flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-sm">
      <Card className="bg-white z-92 w-full max-w-md shadow-xl border-0 overflow-hidden">
        <CardHeader className="border rounded-t-xl bg-gradient-to-r from-amber-500 to-amber-700 text-white relative p-6 ">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-medium">
              {t("formHeading")}
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-amber-600/20 h-8 w-8 absolute top-3 right-3"
              onClick={() => setOpenContact(false)}
            ></Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            {prop !== "none" && (
              <div className="space-y-2">
                <Label htmlFor="property">{t("apartments")}</Label>
                <div className="bg-gray-100 rounded-lg p-2 border border-gray-300 flex items-center gap-x-1.5">
                  <MapPinned
                    strokeWidth={1}
                    stroke="oklch(0.666 0.179 58.318)"
                  />
                  <p className="text-gray-400">{prop.title}</p>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={errors.email ? "text-red-500" : ""}
              >
                {t("email")}{" "}
                {errors.email && (
                  <span className="text-sm">({errors.email})</span>
                )}
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="number"
                className={errors.email ? "text-red-500" : ""}
              >
                {t("number")}{" "}
                {errors.number && (
                  <span className="text-sm">({errors.number})</span>
                )}
              </Label>
              <Input
                id="number"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className={`${errors.number ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="name"
                className={errors.name ? "text-red-500" : ""}
              >
                {t("name")}{" "}
                {errors.name && (
                  <span className="text-sm">({errors.name})</span>
                )}
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className={errors.message ? "text-red-500" : ""}
              >
                {t("message")}{" "}
                {errors.message && (
                  <span className="text-sm">({errors.message})</span>
                )}
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`${t("yourMessage")}...`}
                className={`shadow min-h-[120px] resize-none ${errors.message ? "focus-visible:ring-red-500" : ""}`}
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-end gap-3 border-t p-4 bg-gray-50">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpenContact(false)}
          >
            {t("return")}
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-amber-600 hover:bg-amber-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? `${t("sending")}` : `${t("sendMessage")}`}
          </Button>
        </CardFooter>
      </Card>
    </div>,
    document.getElementById("top-page")
  );
};

export default Contact;
