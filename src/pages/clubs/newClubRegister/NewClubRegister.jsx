import "./newClubRegister.scss";
import NewClubForm from "../../../components/newClubRegistrationForm/NewClubForm";

const NewClubRegister = () => {
  return (
    <div className="newClubRegister-page">
      <div className="registrationContent">
        <div className="allFill">
          <NewClubForm />
        </div>
      </div>
    </div>
  );
};

export default NewClubRegister;
