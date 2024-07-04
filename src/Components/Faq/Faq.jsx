import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { PiCaretUpThin, PiCaretDownLight } from "react-icons/pi";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" shadow-sm mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 focus:outline-none bg-[#FEFEF7]"
      >
        <span className="md:text-lg font-medium text-start">{title}</span>
        <span>{isOpen ? <PiCaretUpThin /> : <PiCaretDownLight />}</span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const Faq = () => {
  return (
    <div className=" p-4 md:p-8 mx-auto max-w-7xl">
      <SectionTitle btnText="Faq" title="Frequntly Asked Question" />
      <AccordionItem title="What Are Your Office Hours?">
        <p>
          Our office hours vary by location. But typically we are open Monday
          through Friday from 8:00 AM to 5:00 PM. Some locations may offer
          extended hours or weekend appointments. Please contact your nearest
          clinic for specific hours.
        </p>
      </AccordionItem>
      <AccordionItem title="How Can I Schedule An Appointment?">
        <p>
          You can schedule an appointment by calling our office or visiting our
          website. We offer online appointment booking for your convenience.
        </p>
      </AccordionItem>
      <AccordionItem title="Do You Accept Insurance?">
        <p>
          Yes, we accept most major insurance plans. Please contact our office
          for more details about your specific insurance plan.
        </p>
      </AccordionItem>
      <AccordionItem title="What Should I Bring To My Appointment?">
        <p>
          Please bring your insurance card, a photo ID, and any relevant medical
          records or documents. If you are a new patient, please arrive 15
          minutes early to complete the necessary paperwork.
        </p>
      </AccordionItem>
      <AccordionItem title="Do You Offer Telemedicine Appointments?">
        <p>
          Yes, we offer telemedicine appointments for certain conditions. Please
          contact our office to find out if telemedicine is appropriate for your
          situation.
        </p>
      </AccordionItem>
    </div>
  );
};

export default Faq;
