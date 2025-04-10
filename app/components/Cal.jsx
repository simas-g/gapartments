"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { lt } from 'date-fns/locale';
const Cal = ({ prop = "none", setOpenContact }) => {
  const [date, setDate] = useState({
    from: new Date(),
    to: undefined,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Selected date range:", date)
    setOpenContact(false)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-sm">
      <Card className="bg-white max-w-3xl shadow-xl border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-700 text-white relative p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/20 rounded-full"
            onClick={() => setOpenContact(false)}
          >
          </Button>
          <CardTitle className="text-2xl font-bold">{prop?.title}</CardTitle>
          <p className="text-gray-700 mt-2">Užimtumo kalendorius</p>
        </CardHeader>

        <CardContent className="p-0">
          <form onSubmit={handleSubmit}>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-gray-500 mb-2">Atvykimas - išvykimas</div>
                <div className="text-lg font-medium">
                  {date?.from ? (
                    date?.to ? (
                      <>
                        {format(date.from, "PPP", { locale: lt })} - {format(date.to, "PPP", { locale: lt })}
                      </>
                    ) : (
                      format(date.from, "PPP", { locale: lt })
                    )
                  ) : (
                    "Pasirinkite datą"
                  )}
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border shadow-sm">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  className="p-3"
                  disabled={new Date() > date ? true : false}
                />
              </div>
            </div>

            <CardFooter className="flex justify-end gap-3 border-t p-6 bg-gray-50">
              <Button type="button" variant="outline" onClick={() => setOpenContact(false)}>
                Atšaukti
              </Button>
              <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                Patvirtinti datas
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Cal
