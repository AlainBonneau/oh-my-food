import Link from "next/link";
import "./NotFound.css";

export async function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Not Found</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link className="backhome-btn" href="/">Retour à l'accueil</Link>
    </div>
  );
}
