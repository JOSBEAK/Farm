export default function ProfileCard({ imag }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imag} alt="Placeholder" />
        </figure>
      </div>
    </div>
  );
}
