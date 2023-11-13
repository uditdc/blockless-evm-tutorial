import { json, http } from "@blockless/sdk";

/**
 * Fetch sample JSON content and serve.
 *
 */
http.HttpComponent.serve((req: http.Request) => {
  const obj = new json.JSON.Obj();
  const callDataObj = new json.JSON.Obj();

  const participants = new json.JSON.Arr();

  participants.push(
    json.JSON.from("0x9De1128dB11F1FEa42e27a9f65F7E9dA18069319")
  );
  participants.push(
    json.JSON.from("0x67a6efAEe22419ba7EEbF702ca7B67603FC1b8fb")
  );
  participants.push(
    json.JSON.from("0x6345fD47e5Da29D69beF6ffF5Fcd82eED6D5De89")
  );
  participants.push(
    json.JSON.from("0x78A715f645587B50767efB7C4b420e11543CFb53")
  );
  participants.push(
    json.JSON.from("0x3B2E85348323f9D913dCD64B6c3D518D3673f41B")
  );
  participants.push(
    json.JSON.from("0x63CEF50CEf27557251B8b118e30FCaCE268109B4")
  );
  participants.push(
    json.JSON.from("0x9C535Feb707914B2D21FC41B31A01548bA0cb154")
  );

  const valuesArr = new json.JSON.Arr();
  valuesArr.push(participants);

  callDataObj.set("abi", ["address[]"]);
  callDataObj.set("values", valuesArr);

  obj.set("callData", callDataObj);

  return new http.Response(obj.stringify())
    .header("Content-Type", "application/json")
    .status(200);
});
