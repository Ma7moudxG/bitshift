import toast from "react-hot-toast";
import { FormData } from "../../components/ContactFormT";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success("Message sent successfully!");  // Success toast
    })
    .catch((err) => {
      alert("Error sending email: " + err);
    });
}
