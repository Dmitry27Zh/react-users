const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем пользователям ({count}) отправлено приглашение.</p>
      <button className="send-invite-btn" onClick={() => window.location.reload()}>
        Назад
      </button>
    </div>
  )
}

export default Success
