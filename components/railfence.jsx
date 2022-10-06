import { useState } from "react";

export default function RailFence() {
  const [plainText, setPlainText] = useState(
    "We've been discovered, run at once"
  );
  const [depth, setDepth] = useState(2);
  const handleChange = (e) => {
    setPlainText(e.target.value);
  };

  const handleDepthChange = (e) => {
    setDepth(e.target.value);
  };

  const Encrypt = (numberRails, string) => {
    if (!string || !numberRails) {
      console.log("invalid input");
      return "";
    }
    var arr = string.split(""),
      result = [];
    for (var i = 0; i < numberRails; i++) {
      result[i] = [];
      for (var j = 0; j < arr.length; j++) {
        var k = j * 2 * (numberRails - 1) + i;
        k < arr.length ? result[i].push(k) : 1;
        if (i !== 0 && i !== numberRails) {
          var k2 = j * 2 * (numberRails - 1) - i;
          k2 < arr.length && k2 > 0 ? result[i].push(k2) : 1;
        }
      }
    }
    function uniqueSort(arr) {
      arr = Array.from(new Set(arr));
      return arr.sort(function (a, b) {
        return a - b;
      });
    }

    result = result
      .map(function (arr) {
        return uniqueSort(arr);
      })
      .reduce(function (a, b) {
        return a.concat(b);
      })
      .map(function (i) {
        return arr[i];
      })
      .join("");
    return result;
  };

  return (
    <>
      <input
        placeholder={plainText}
        className="border-slate-400 text-midnight rounded-lg focus:border-miami placeholder:text-scott border-2 bg-slate-200"
        type="text"
        onChange={handleChange}
      />
      <input
        type="range"
        placeholder={depth}
        onChange={handleDepthChange}
        className="block h-24 w-full "
        max={plainText.length - 1}
        min={2}
      />
      <div>
        This is the encrypted text using a depth of {depth}:<br />
        {Encrypt(depth, plainText)}
      </div>
    </>
  );
}
