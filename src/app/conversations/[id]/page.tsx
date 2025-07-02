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

export default async function Conversation({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const unwrappedParams = await params;
  const data = await fetch(
    `https://misajsc.amis.vn/chat/api/business/v1/messages/conversation/${unwrappedParams.id}?Limit=16&Until=2025-07-02T17:48:08.617%2B07:00`,
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
    }
  );
  const messages = await data.json();

  return (
    <div className="overflow-y-auto hidden md:block border-r-4 border-black bg-white/40">
      {messages.map((message: IMessage) => (
        <div key={message.Id} className="flex flex-col">
          <div className="font-semibold">{message.SenderName}</div>
          {message.Content && (
            <div
              className="mt-1 text-gray-700"
              dangerouslySetInnerHTML={{ __html: message.Content }}
            />
          )}
          <div className="text-xs text-gray-500">
            {new Date(message.CreatedDate).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
