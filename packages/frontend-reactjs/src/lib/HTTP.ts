interface GoogleAccountResponse {
  client_id: string;
  credential: string;
  select_by: string;
}

const HTTP = {
  sendGoogleIdToken: async (gar: GoogleAccountResponse) => {
    try {
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
    } catch (error) {
      console.log(error);
      alert("서버가 불안정합니다. 잠시 후 시도하세요.");
    }
  },
};

export default HTTP;
