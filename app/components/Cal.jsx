"use client"

import { useState } from "react"
import { Calendar1 } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 py-10 bg-black/50 flex items-center justify-center pt-12 sm:p-6 md:p-10 backdrop-blur-sm">
      <Card className="max-h-[700px] overflow-auto bg-white max-w-3xl w-[90%] shadow-xl border-0">
        <CardHeader className="border gap-x-4 gap-y-4 justify-between rounded-t-xl flex w-full flex-between flex-wrap bg-gradient-to-r from-amber-500 to-amber-700 text-white relative p-6">
          <div className="w-fit">
            <CardTitle className="text-2xl font-bold">{prop?.title}</CardTitle>
            <p className="text-gray-700 mt-2">Užimtumo kalendorius</p>
          </div>
          
          <div className="flex gap-x-4 bg-gray-800 p-4 rounded-xl w-fit">
            <img src="/bookingcom.svg" width={40} alt="" />
            <img src="/airbnb.svg" width={80} alt="" />
          </div>
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

              <div className="overflow-hidden rounded-lg border shadow-sm w-fit m-auto">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={1}
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
