import { useState, useEffect } from "react";

// {
// 	"message": null,
// 	"results": [
// 		{
// 			"address1": "東京都",
// 			"address2": "板橋区",
// 			"address3": "坂下",
// 			"kana1": "ﾄｳｷｮｳﾄ",
// 			"kana2": "ｲﾀﾊﾞｼｸ",
// 			"kana3": "ｻｶｼﾀ",
// 			"prefcode": "13",
// 			"zipcode": "1740043"
// 		}
// 	],
// 	"status": 200
// }
type ZipCloudResponse = {
  message: null | string;
  results: {
    address1: string;
    address2: string;
    address3: string;
    kana1: string;
    kana2: string;
    kana3: string;
    prefcode: string;
    zipcode: string;
  }[];
  status: number;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData1(): Promise<string> {
  await sleep(1000);
  const apiResult: ZipCloudResponse = await fetch(
    "https://zipcloud.ibsnet.co.jp/api/search?zipcode=1740043"
  ).then((response) => response.json());
  return `${JSON.stringify(apiResult.results)}`;
}

const About = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);

  if (loading && data === null) {
    throw fetchData1().then((data) => {
      setData(data);
      setLoading(false);
    });
  }

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      {data && (
        <div>
          result
          <br />
          {data}
        </div>
      )}
      <button
        className="border p-1"
        onClick={() => {
          setLoading(true);
          setData(null);
        }}
      >
        load
      </button>
    </div>
  );
};

export default About;
