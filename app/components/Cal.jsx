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
        <CardHeader className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white relative pb-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/20 rounded-full"
            onClick={() => setOpenContact(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
          <CardTitle className="text-2xl font-bold">Select Your Dates</CardTitle>
          <p className="text-teal-100 mt-2">Please choose your preferred date range</p>
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
                        {format(date.from, "PPP", { locale: lt })} - {format(date.to, "PPP", {locale: lt})}
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
                />
              </div>
            </div>

            <CardFooter className="flex justify-end gap-3 border-t p-6 bg-gray-50">
              <Button type="button" variant="outline" onClick={() => setOpenContact(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                Confirm Selection
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Cal
