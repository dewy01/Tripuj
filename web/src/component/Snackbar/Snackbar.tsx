import './SnackbarStyles.css'; 

type Props = {
    message:string
}

const Snackbar = ( {message} :Props) => {
  return (
    <div className="snackbar">
      {message}
    </div>
  );
};

export default Snackbar;
