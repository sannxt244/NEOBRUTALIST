import Messsages from "./messages";

interface PageParams {
  id: string;
}

interface IMessage {
  Id: string;
  Content: string;
  SenderId: string;
  SenderName: string;
  CreatedDate: string;
}

export default async function ConversationPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { id } = await params;
  const data = await fetch(
    `https://misajsc.amis.vn/chat/api/business/v1/messages/conversation/${id}?Limit=16&Until=2025-07-02T17:48:08.617%2B07:00`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,vi;q=0.8",
        "access-control-allow-origin": "*",
        devicename: "Web",
        "response-type": "json",
        "sec-ch-ua":
          '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        cookie: process.env.NEXT_CHAT_COOKIE,
      },
      referrer: "https://misajsc.amis.vn/chat/cv/67db92ff474bf706bf58b5ba",
      referrerPolicy: "strict-origin-when-cross-origin",
      mode: "cors",
      credentials: "include",
    },
  );
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  const messages = await data.json();

  return (
    <div className="hidden overflow-y-auto border-r-4 border-black bg-white/40 md:block">
      <Messsages messages={messages}></Messsages>
    </div>
  );
}
