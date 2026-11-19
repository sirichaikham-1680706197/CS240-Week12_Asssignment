import { Link } from "react-router";

function NotFoundPage() {
  return (
    <main className="page-container">
      <section className="message-card not-found-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>ไม่พบหน้าที่คุณต้องการ</p>
        <Link className="primary-link" to="/">กลับหน้าแรก</Link>
      </section>
    </main>
  );
}
export default NotFoundPage;
