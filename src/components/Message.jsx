export default function Message({ status }) {
  let checkType;
  let message;

  if (status === undefined) {
    checkType = "neutral";
    message = "Devam etmek için doğrulama kodunu giriniz";
  } else if (status) {
    checkType = "doğru";
    message = "Onaylandı.";
  } else {
    checkType = "yanlış";
    message = "Hatalı kod.";
  }

  return (
    <div className="message-container">
      <p className="message">{message}</p>
      <img src={`./images/${checkType}-check.svg`} className="check" />
    </div>
  );
}
