const url =
  "http://host.docker.internal:3000/callback?session_state=71617c8b-e708-478b-8118-3b2223bec6d4&code=870cd367-ea11-434b-b695-18f6ec214ecd.71617c8b-e708-478b-8118-3b2223bec6d4.0e55fc73-06ea-4973-bae9-3b553bc83200";

const request1 = fetch(url);
const request2 = fetch(url);

Promise.all([request1, request2])
  .then(async (responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((jsons) => console.log(jsons));