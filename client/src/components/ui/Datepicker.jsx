import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // style pour la datepicker
import { useState, forwardRef } from "react";
import { fr } from "date-fns/locale";
import { Calendar, X } from "lucide-react";
import Input from "./Input";
import Button from "./Button";

registerLocale("fr", fr);

const CustomInput = forwardRef(({ value, onClick, className }, ref) => (
  <Input
    className={className} 
    onClick={onClick} 
    ref={ref} 
    placeholder={value || "Définis une échéance (optionnel)"} 
    icon={Calendar}
    readOnly
  />
))

CustomInput.displayName = "CustomInput"

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  return <div className="relative [&_.react-datepicker-wrapper]:w-full [&_.react-datepicker__input-container]:w-full">
    <DatePicker
      closeOnScroll
      popperPlacement="bottom"
      selected={selectedDate}
      onChange={setSelectedDate}
      dateFormat="dd/MM/yyyy"
      customInput={<CustomInput className={"cursor-pointer w-full"} />}
      locale="fr"
      minDate={new Date()}
    />

    {/* ✅ Champ utilisé par FormData */}
    <Input 
      type="date" 
      name="dueDate" 
      className="hidden"
      readOnly
      value={selectedDate ? selectedDate.toLocaleDateString("en-CA") : ""} 
      // en-CA renvoie le format YYYY-MM-DD attendu par l'input de type date natif
      // toLocaleDateString règle le problème de timezone
    />

    <Button 
      variant="outline"
      icon={X}
      onClick={() => setSelectedDate(null)}
      className="absolute top-1/2 -translate-y-1/2 right-1"
    />
  </div>
}

export default Datepicker
