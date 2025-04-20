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
const Contact = ({ prop = "none", setOpenContact }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email) newErrors.email = "privalomas";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Neteisingas el. pašto formatas";

    if (!name) newErrors.name = "privalomas";
    if (!message) newErrors.message = "privaloma";

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
              Parašykite mums laišką
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
                <Label htmlFor="property">Apartamentai</Label>
                <div className="bg-gray-100 rounded-lg p-2 border border-gray-300 flex items-center gap-x-1.5">
                  <MapPinned strokeWidth={1} stroke="oklch(0.666 0.179 58.318)"/>
                  <p className="text-gray-400">{prop.title}</p>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={errors.email ? "text-red-500" : ""}
              >
                El. paštas{" "}
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
                htmlFor="name"
                className={errors.name ? "text-red-500" : ""}
              >
                Vardas{" "}
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
                Žinutė{" "}
                {errors.message && (
                  <span className="text-sm">({errors.message})</span>
                )}
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Jūsų žinutė..."
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
            Atšaukti
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-amber-600 hover:bg-amber-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Siunčiama..." : "Išsiųsti pranešimą"}
          </Button>
        </CardFooter>
      </Card>
    </div>, document.getElementById('top-page')
  );
};

export default Contact;
