"use client";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1vmWFThTj3sjMBhJznbe15TjExsaLdTE&ehbc=2E312F&noprof=1"
      width="640"
      height="480"
    ></iframe>
  );
};
const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = "Būtinas el. pašto adresas";
    if (!name) newErrors.name = "Būtinas vardas";
    if (!message) newErrors.message = "Būtina žinutė";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate async submission
      setTimeout(() => {
        console.log({ email, name, message });
        setIsSubmitting(false);
        setOpenContact(false); // Close form or show success message
      }, 2000);
    }
  }

  return (
    <Card className="bg-white z-92 w-full max-w-md shadow-xl border-0 overflow-hidden m-auto mt-10">
      <CardHeader className="border rounded-t-xl bg-gradient-to-r from-amber-500 to-amber-700 text-white relative p-6">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-medium">
            Susisiekite su mumis
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
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
              className={
                errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className={errors.name ? "text-red-500" : ""}>
              Vardas{" "}
              {errors.name && <span className="text-sm">({errors.name})</span>}
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={
                errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
              }
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
  );
};
const page = () => {
  return (
    <div className="flex items-center w-full flex-col md:flex-row">
      <div className="absolute top-0 overflow-x-hidden w-full z-[-2] h-screen">
        <img
          className="w-full h-full absolute object-cover object-center"
          src="/oldtown.jpg"
          alt=""
        />
        <div className="w-full h-full bg-black/40 absolute"></div>
      </div>
      <Form />
      <Map/>
    </div>
  );
};
export default page;
