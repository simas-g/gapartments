"use client";
import { giedreApartments } from "@/lib/properties";
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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const PoiMarkers = () => {
  return (
    <>
      {giedreApartments?.map((poi) => (
        <AdvancedMarker key={poi.title} position={poi.loc}>
          <Pin background="#FBBC04" glyphColor="#000" borderColor="#000" />
        </AdvancedMarker>
      ))}
    </>
  );
};

function FullMap() {
  return (
    <APIProvider apiKey={"AIzaSyCoN-eN4LE9tZDgKNCmLS4zPeqyVLt1y0M"}>
      <div className="md:h-[350px] h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-300">
        <Map
          options={{ mapTypeControl: false }}
          defaultZoom={11.5}
          mapId="Apartamentai"
          defaultCenter={giedreApartments[0].loc}
        >
          <PoiMarkers />
        </Map>
      </div>
    </APIProvider>
  );
}

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = "Būtinas el. pašto adresas";
    if (!name) newErrors.name = "Būtinas vardas";
    if (!message) newErrors.message = "Būtina žinutė";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log({ email, name, message });
        setIsSubmitting(false);
        alert("Žinutė išsižsta!");
      }, 1500);
    }
  };

  return (
    <Card className="mt-30 bg-white w-full max-w-lg mx-auto shadow-2xl border-0 rounded-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-tr from-amber-500 to-amber-700 text-white p-6">
        <CardTitle className="text-2xl">Susisiekite su mumis</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
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
              className={errors.email ? "border-red-500 ring-red-500" : ""}
            />
          </div>
          <div>
            <Label htmlFor="name" className={errors.name ? "text-red-500" : ""}>
              Vardas{" "}
              {errors.name && <span className="text-sm">({errors.name})</span>}
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "border-red-500 ring-red-500" : ""}
            />
          </div>
          <div>
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
              className={`resize-none min-h-[100px] ${errors.message ? "border-red-500 ring-red-500" : ""}`}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-3 bg-gray-100 px-6 py-4 border-t">
        <Button
          variant="outline"
          type="button"
          onClick={() => alert("Formos siuntimas atšauktas")}
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

const Page = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full absolute z-[-1]">
        <FullMap />
      </div>
      <Form />
    </div>
  );
};

export default Page;
