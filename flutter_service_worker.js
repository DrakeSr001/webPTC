'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "51889743da064a2016f8f2509e079b22",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0a03c4a09522c8dc99b337c213dd4216",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aac63f373a7bbc88d2c624093c387b4a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c8085815f1ded4f4d78e8b6f8d6ecd5",
".git/logs/refs/heads/main": "0392c525ed25b5639181cb96b75762fb",
".git/logs/refs/remotes/origin/main": "c68011f1f3b5d0eec7e396ec451bd3cd",
".git/objects/00/82635f610201052c9ba34c2b26d92140505115": "5a1b4c5d6cf5b85211b986c0992f3de9",
".git/objects/01/56639764ec19c1ef90a73f8b28f45e18a68e3c": "7e93066fb335011c4778664b62b7d454",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/327c95ff1a0c0b17133538031bdfc00a5e08bc": "20b3af57bccfa55c90cc057df6c47dd6",
".git/objects/06/9052ac7099c8e6a1e6f0900e8ba3dc24a3dbe5": "a44f21fa9da03519350e422499c92949",
".git/objects/06/b50d622fbb5fd53bc1b041d457fa0da318993b": "6909719c5689bf3777087295608c1afa",
".git/objects/09/94909a5e3c601fcd360a7179046879969dd7a0": "4cf9f342b02468d7c03b280387ad24a1",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/0c/c68a014d9a297e5ac726d4c7c4de32d74ff1dc": "53e6dbf5ba9afeb3caf735bc8d4c8984",
".git/objects/14/4b4e0d0d95c15f7e440bbf13b771535a757f27": "d682377c0a926a2d6c277b4f4043fb64",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1c/03448f417e0d395c466b6fd3c064828bad648a": "8ab7d4a78ba09c5761bbfd220b740a58",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1c/a7f8c21c2470556df7151e13e18db55abb5d5b": "98699295daaf3d5e547eeed0068c37be",
".git/objects/1e/feed85fdb8bee1aca6fb7097f6cffea996250c": "51789e5b30bbef19f3cb36f4aaccdc00",
".git/objects/1f/e0d5ca5a2701ad3c5c96632e722f232b8b8d71": "dfae986088006919eb84aad45fb9e6dd",
".git/objects/1f/f604a166ffc84963355f367eedca83e0678a84": "49a81eed2fb95469358400757f581db7",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/b75d782e86c670f366ef01b79acd22a3792a9c": "fde5febe9a15f63be09e8e892d0b4b10",
".git/objects/23/edc851a6f554294e0e39ffc3d23d887fcbbd4d": "c176bd3a8299b310dc888494e3a7ea66",
".git/objects/25/7ac540f91c5d4286d4ca9df6c9ca11154082e3": "01a8e247f906ac0b80644e7243a60dfd",
".git/objects/27/832f793c752028abff426e139612bfb8348614": "89df1fd6d16eab77c01f5cd63450c7c9",
".git/objects/28/28ae90e78c8a3a7fca48caa575796c97196608": "f394676ca5df4a673ad27bfa04ba2193",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/da6bcfa3b31956879715cfeaa1d1f591da80cd": "96ba59bb1813e09e5e0397497cb51dee",
".git/objects/2a/f779d42abfe48ffcf80ba060b8a4e30a6d3c9f": "dd6c738b4a57ee4150f49951c050290d",
".git/objects/2c/9fc8c7795996cf9fb0f201f73dd5320462b0b1": "f20e7b55c328a88b59ba049e9b51231d",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/30/7f025dafdd191de8f512c1220c8ea146627c69": "88233a4d9d7f85d144c06e0dc98a6383",
".git/objects/36/07977a8bb46362030ff880bf03113b62aa0897": "70d8ceb70cf222224bdab2a291c65294",
".git/objects/37/bfb7548d95ffe2385f3bb6d6abf73954a94962": "9048a385159c7325a2687598f941ed0b",
".git/objects/37/e1359683cd34bc44a7d4491cec666f002bf4c1": "06005c966aed20ec5c1419bd224d3436",
".git/objects/37/fe9e87b98e660902505c8e4955697de4cf180b": "250b164d2c2b1d53b66e6a06cc519962",
".git/objects/3a/5b3c6b85a801daa4f904853c38fde4ccc2b876": "39026eca503a1727239794b8b254519b",
".git/objects/3c/754f7b943b029707a2a63dc9369acb50bb30b5": "dbf3bb19bddf2e7053ba2f3bd86993a7",
".git/objects/42/1aaea2c9be3f2daa79df1e350ec1cecf968a6d": "c2185ad42c93eb5faf41927151200bf3",
".git/objects/46/171f69743b6df7f78350c97cabb78bb037199d": "bb2a6e866437283c6e1e33434e2de518",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/de2e9fbbb4903215bfa30f8c35349bc9b8b77c": "8e6486b79b817b5f9086c4c1a88ffb03",
".git/objects/4e/caf378f0c6aca51a5c776168fedae1aa4572e7": "b3d215554d80fd7fd126734823bf5f8b",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/49da03a7fc242e0390a4beb32b928fc5aa9fea": "ab0306e0cc8e09b77560a3dc2b8086b6",
".git/objects/50/6c75b467d39255934c887b87da84382c296166": "ad997b825c4212085f5057ac5d84d7df",
".git/objects/54/2ffbc0c0be61336719b633963f71a35d70ff59": "89c72cf55b43771cfa09a70ff1152431",
".git/objects/56/7cc0e61da01c8caef9422d076fe76fcf0afd30": "0abd5e58ff5f714bac1fd85a3b831156",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/57/5857b3c0a9f2e89d6026334ea48c9ed3b262d6": "c03a190c79fc2261df9e7ce3d784b269",
".git/objects/57/fddf2eb0d1bf8bf490e8efdedadf58c7859e5a": "a2f0e074a2b76d9cda1b05df95bc1e20",
".git/objects/5b/f28b8b4054c7488ebd7fda8ca343e6ae02d9d9": "55aded605c509fcbee42ae16925a8278",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/5e/4649abe8c44520203b2254b3e4b30700b5b659": "cf56608faf0e16dd092a6151461904f1",
".git/objects/5f/1107b92b01279179b306a8b9df9b6b7ab5ba1a": "359c2a194f4ab516ff414efaa8ded091",
".git/objects/5f/87d284a2239b4fbd2a013d036cc391762153b7": "b274aecf6572e55b90a874cc83dba493",
".git/objects/5f/cabe9eaf405523db86ccb2be23866f3c8dabd4": "c48096b1066b179b1ae49ebe3c770138",
".git/objects/60/f0af870257fcd777b03ba2a84959f240597c0d": "4c99844cbd7d499b1ef133b92161b8ab",
".git/objects/62/a19b631e23cd3ac0e3b7bddbbe22283241ee35": "f0b1d478c55f7790ce188c2531341f2d",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/81548538f2157091e43b43ea406b35ad06bc35": "7771f37f5355a5b392d84b85c214f6e6",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/66/633a254baa446d4ae83b579155e752b96328c4": "a0148457124f48b4c2411c229c6f232e",
".git/objects/66/8e35f35c404c59a4d7e247e8dcdc903cc8fe76": "9e4b251e8c892bb8d013b81f0fd53cb8",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/d29dccba5ee5f123aafb5f3fb5eb704ce61552": "6d571778b123720dd4e9d7392c4359de",
".git/objects/70/7f4147c26b2bf4dcdd2a4dd9eb1fe4b6d81aff": "792ef5a3512ae7312403f0a5f45fde13",
".git/objects/71/89f2b6d74569534785f36c3e85ff24b075f40b": "8f65324913a33e53df99eb87d85dab45",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/76/b56b64197e12aeffd3925c61f5c8410748f7e8": "86987932e11ee296a443c69f4e8e5561",
".git/objects/77/97f7c6a7356b0d451d11a49925df854c22e978": "1aa892ecd25dc2a457249503f1fe6ea8",
".git/objects/78/b061f2b131cb30640034efdd6e48398412d645": "9508b22347682b750e5a7ff061109966",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/f202e698f44c8637e0c03b82e509bab3272466": "5972b5cc0af95b830f31178ffa8ce51e",
".git/objects/84/37204c6d472b47996cc1bc70f86dd5fa9791e6": "78fba07acc7f6ebde9e19361326b3521",
".git/objects/84/863a2c99bd75e4f7cf342f05421be5636627b9": "b4146426ea85899b77d4446144a8917d",
".git/objects/85/945ea88820561359b80bff769a40bb1788266b": "2d855cb8e03e46a3959313bad69abb16",
".git/objects/85/d50d84b5f914dae57cab6083823ecae9fb560d": "f404b79a7b67a3034076eb1773fe3365",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fab168df047d409d8d93ea8a502a2a26c319f6": "79dbd1d396d168f8b9d6287cc4e6b067",
".git/objects/8c/54439b39dd4c6e5d81d296d8f4436ea6cf4cf0": "8ed2ef772f414b9be93ec444f1e449cf",
".git/objects/8d/49f1e0867d5551587c0d628009d3bcb53332fb": "78e58a008bfc0f68fb19d57e9eaa0730",
".git/objects/8d/ea4a27671f502cf4b313be7ef34c2c19f62541": "cadd99850c2b36b149aab92caddac388",
".git/objects/91/a925f75041abac3594a67fe5992b14b2e70857": "b71c9696e4f366708231f08c3ba5fffa",
".git/objects/95/8ba824f7012123329e3f648dd6245db7d0df52": "8f674de6af5ecbc1b97f6b9e7a307813",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/d41e7025df01c49abad8ffa5bd36cc22c3eb9a": "99e8bc2c815bf15e05776c07f7366654",
".git/objects/9a/d49d799152257940823c2d30b4cfae0e47d5e3": "5d2da831e4a98a840281feeb0ee8e798",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/54af48b4285679a37c84654a9fc2015d9abaca": "388b9032d7934a4d1798b01c309673f5",
".git/objects/9d/27dcd1435a24a39feb50a56c46594fe1f0653c": "2b492263934cc775b8de7ddda2b64882",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a2/ef9e82ac079fb3d1b518d7df902a4b877c497a": "e5a816b492a57b1608c8ccc442ff614f",
".git/objects/a5/0a7c5252172d08b21227c052d522fd87658647": "60aca1917583309bbeacc42beb22f97f",
".git/objects/a5/7589366a4582ddee94ac596e4802c03cfe096c": "01c481691eab1e603b128e745d3cbc6e",
".git/objects/aa/970b668b3d1dfdd041c6b57522600182c6c67a": "61592c2de72590cca640d0a8dc6402af",
".git/objects/ac/e381c221bf9762aecd481fc7714c7fb386d9f9": "171760a5af71a9b6cee52df153db7be2",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/ad/e6db89a166f11fefac98f9d1e36355b8332754": "c3b1be92547a1377d8c210d85cc69ec6",
".git/objects/ae/e4ec643a06f99541ad27a03365a0b4a364b8ff": "55204808287c8a92512230fde742553d",
".git/objects/af/5a94bbe96536530cfdc54518427c0afbe7f2bc": "fb57c7a067dcd9c234b74b37ce08f9f9",
".git/objects/b2/11e53f71a1875e09b979126e3d832117f33db1": "e5127f375bb20754b14a022b6e288f79",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/72a2a08e7a1a5ad64feffc522a5b496373ddd1": "c10e54cb28f95a5f7bcce2287aa321b9",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/dd8f6bafc601043b0454a1d952ec39f7f6a0d4": "de2d15867d59bbe66526bb8bd9c10c08",
".git/objects/c5/69b35664fdf76f201f1924ecb84bfcf8596341": "ed1d20b303cbc011693694c4de95a921",
".git/objects/c6/ebddd19f29b95ddd017ec241e7d11eb0a6b738": "ead52df5272c81ea7fd4716a4ca1edf5",
".git/objects/c7/6682c62cc7202e89954ed1ef44319dfcd5ee22": "dfc952d2f865b896156b6c9bd1d31b23",
".git/objects/c8/4a7b46909f256cd3874f0d83ab6f0ad864b747": "708b1886f4cae4d6074688796944a9fc",
".git/objects/c8/f6ca350f1013060b717ad89a0c889dffe3f4dd": "61472a1eb25fd0ef64aa8fe6e3bc6e46",
".git/objects/c9/fa0ddc303101a0f02f6f5ab75e7d37caa27d3a": "8128d5cd4c16ef98f4dc3f4208afd292",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/d1/cb672af3c1ed2dfe31d579b41812716d5e1bf1": "5df8f3560629df48d755638e9d4251cb",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0668cedf3c695d4ae66bda51658f7a3d6e95a2": "f7e8bb3fe0a125f064d81e1dc5e03d60",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6f2fba19b0b09066e2bba2ab268e005c3b7886": "4e360cf44ce59cf1c241a0ba52b6f780",
".git/objects/da/65eb554f9024136bbad4a2fef1c0ffaca6242c": "c66e59b797b0b83f6ef88cfd78b9790b",
".git/objects/db/42f5a357cfee51ccbdabe91c93dbe19f47bd6f": "c8d95e6d4b3da130586223bbdbc8aa0a",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/dd/bbf50b62e27a7cfa1cfaf8ffa9925c654b897d": "aacba3d8b965a008730a985d27ebd93f",
".git/objects/dd/faed067b71d4a4ab87d085fed6c17cc540b921": "0d14c2d48567c3a4e1fe1da4ec61933d",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/8323f4b0bcd2e660e5adc2e9ff6661d4aba7df": "ebe35ecb4fb20a3795917069a5ee38f0",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e6/e48eaeb44a4292d8f0041019a23f9587204a39": "fc1d1115a8f6a678875e7b2901b498fb",
".git/objects/e7/4878a0cc4c21f6af7cb8db0aac4459fae9f9d3": "0f06cc33b319678af1dec02b8612480e",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/2678f1cd99b8c96ce4eed50adf8580064cfc2d": "06d2a1da670d037c5783ec5e5f7d698b",
".git/objects/ea/fcb00fd7f7b5e3aae1017590f42faf547acb7c": "6396dd885e98b4716057cdfdc4f6aeb6",
".git/objects/eb/296404a2e9fde62d6ccbea056b942f5f1a37a1": "7d9e4efed90f307e8c1e158d61d2e4ba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/477764b67beb2c1b0ff2bcf418cb0ea8442635": "6e04e71c67eba2a41b69198fbaa77f54",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/aa7a32770e213353200753378484ab0dac9713": "0d59038847fbd9e8925dfbe2d10b9132",
".git/objects/f9/9e36cea4d0a278339c3c44028cd16e55d59b8a": "b836f7950dc350dd68c2d5d2666500cd",
".git/objects/fa/9b98680e873afaaef7e764b9d4f3c245558c50": "f3558d449a286a560b04e27f70245cc5",
".git/objects/fc/041495a86e0651abd3c2b0f202f8bd14a4ac7d": "0dbeec1762674e1be11998c1fb5842c9",
".git/objects/fc/482b9937f87d82fe8112e55434a8d948da7a5b": "dbbe88b164593705c65aad478b8f982c",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/05a50b7fb0a04166529b91e359c39b7002f02f": "b281dc7a6ffe179f6161f783c34df195",
".git/ORIG_HEAD": "ac7ac89966a760fb60304791182735c6",
".git/refs/heads/main": "9ba3d1c9ef238dc66cabe61fbac22629",
".git/refs/remotes/origin/main": "9ba3d1c9ef238dc66cabe61fbac22629",
"assets/AssetManifest.bin": "a4f260fb2071d5ced88508b55bf95b0f",
"assets/AssetManifest.bin.json": "7bca05f03e104e0982e2e21ffaddb84c",
"assets/AssetManifest.json": "d2e2f910f3dff5053c855bb3ed8e656f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c83f7f0390f96d483e7067ffcd01c585",
"assets/images/gameya.png": "123c80e826c58c44cb6feac61e8fa736",
"assets/images/icon_foreground.png": "beca7ea9202eaffdbe8b7de01afff4ea",
"assets/images/splash_logo.png": "0b30ca4f1d2bc813bf6e2fb1129d3e07",
"assets/NOTICES": "37e8b238a3eee9f4e6c483bacbe86474",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "aebd9f8262ad71f651b6eca2ac20ade4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b7f218fb91fca066f5a492507890df81",
"/": "b7f218fb91fca066f5a492507890df81",
"main.dart.js": "7d4ed7c394e5a2765049ec9f1fdc99dd",
"manifest.json": "bd274038c890b0fc19871675eb254e4e",
"version.json": "23c38ba91289ecf8b63a797dc7741d71",
"_redirects": "ef952d360ec42c652095dfeb72a350a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
