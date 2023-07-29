import "./Reciept.scss";

function RecieptItem(props:{url:string, title:string}) {
  return (
    <div className="recieptItem">
        <img src={props.url} alt="Dish" />
        <h3>{props.title}</h3>
    </div>
  );
}

export default RecieptItem;
