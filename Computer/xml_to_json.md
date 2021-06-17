# How to convert an XML file to JSON and save as a new file

## 1. Install [node-xml2js](https://www.npmjs.com/package/xml2js)

Create a new folder and initialise npm by typing `npm init -y` on Terminal

Then, `npm install xml2js`

## 2. Create files

- xml_parser.js
- xml file that you want to convert to JSON (sample.xml)

Node implementation is quite simple.

`xml_parser.js`

```
const xml2js = require("xml2js");

const xml = fs.readFileSync("sample.xml"); // where the xml file is located
(async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const json = JSON.stringify(result, null, 4);

    fs.writeFileSync("xmltojson.json", json); // whatever you want to name the new file
  } catch (error) {
    console.log(error);
  }
})();

```

`sample.xml` (borrowed from [Microsoft](<https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms762271(v=vs.85)>))

```
<?xml version="1.0"?>
<catalog>
   <book id="bk101">
      <author>Gambardella, Matthew</author>
      <title>XML Developer's Guide</title>
      <genre>Computer</genre>
      <price>44.95</price>
      <publish_date>2000-10-01</publish_date>
      <description>An in-depth look at creating applications
      with XML.</description>
   </book>
   <book id="bk102">
      <author>Ralls, Kim</author>
      <title>Midnight Rain</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-12-16</publish_date>
      <description>A former architect battles corporate zombies,
      an evil sorceress, and her own childhood to become queen
      of the world.</description>
   </book>
   <book id="bk103">
      <author>Corets, Eva</author>
      <title>Maeve Ascendant</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-11-17</publish_date>
      <description>After the collapse of a nanotechnology
      society in England, the young survivors lay the
      foundation for a new society.</description>
   </book>
</catalog>

```

## 3. Run the script

In your Terminal, type `node xml_parser.js`

## 4. Tada 🎉

```
{
    "catalog": {
        "book": [
            {
                "id": [
                    "bk101"
                ],
                "author": [
                    "Gambardella, Matthew"
                ],
                "title": [
                    "XML Developer's Guide"
                ],
                "genre": [
                    "Computer"
                ],
                "price": [
                    "44.95"
                ],
                "publish_date": [
                    "2000-10-01"
                ],
                "description": [
                    "An in-depth look at creating applications \n      with XML."
                ]
            },
            {
                "id": [
                    "bk102"
                ],
                "author": [
                    "Ralls, Kim"
                ],
                "title": [
                    "Midnight Rain"
                ],
                "genre": [
                    "Fantasy"
                ],
                "price": [
                    "5.95"
                ],
                "publish_date": [
                    "2000-12-16"
                ],
                "description": [
                    "A former architect battles corporate zombies, \n      an evil sorceress, and her own childhood to become queen \n      of the world."
                ]
            },
            {
                "id": [
                    "bk103"
                ],
                "author": [
                    "Corets, Eva"
                ],
                "title": [
                    "Maeve Ascendant"
                ],
                "genre": [
                    "Fantasy"
                ],
                "price": [
                    "5.95"
                ],
                "publish_date": [
                    "2000-11-17"
                ],
                "description": [
                    "After the collapse of a nanotechnology \n      society in England, the young survivors lay the \n      foundation for a new society."
                ]
            }
        ]
    }
}

```
