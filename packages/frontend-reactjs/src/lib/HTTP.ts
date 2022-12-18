interface GoogleAccountResponse {
  client_id: string;
  credential: string;
  select_by: string;
}

const HTTP = {
  sendGoogleIdTOken: async (gar: GoogleAccountResponse) => {
    console.log(gar);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/api/auth/register/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: gar.credential }),
      }
    );
    switch (response.status) {
      case 200:
        break;
      case 400:
        alert("잘못된 요청입니다.");
        break;
      default:
        alert(response);
    }
  },
};

export default HTTP;
