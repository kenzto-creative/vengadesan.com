import { redirect } from "next/navigation";

export default function MegaMenuRedirectPage() {
  redirect("/?menu=open");
}
