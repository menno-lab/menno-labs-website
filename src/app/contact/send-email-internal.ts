import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const region = process.env.AWS_REGION;

const sesClient = new SESClient({ region });

const adminEmail = "menno@menno-labs.com";

export async function sendInternalEmail(message: string) {
  const command = new SendEmailCommand({
    Source: adminEmail,
    Destination: {
      ToAddresses: [adminEmail],
    },
    Message: {
      Body: {
        Text: {
          Data: message,
        },
      },
      Subject: {
        Data: `MENNO-LABS-[${process.env.NODE_ENV?.toUpperCase()}]`,
      },
    },
  });
  return await sesClient.send(command);
}
