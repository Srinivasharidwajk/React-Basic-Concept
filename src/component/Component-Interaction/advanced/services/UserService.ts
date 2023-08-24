import {IUser} from "../models/IUser";

export class UserService{
    private static users:IUser[] = [
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Trinidad",
                last: "Moreno"
            },
            location: {
                street: {
                    number: 1299,
                    name: "Calle del Barquillo"
                },
                city: "Hospitalet de Llobregat",
                state: "Asturias",
                country: "Spain",
                postcode: 77006,
                coordinates: {
                    latitude: "-31.8182",
                    longitude: "102.3995"
                },
                timezone: {
                    offset: "+5:30",
                    description: "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            email: "trinidad.moreno@example.com",
            login: {
                uuid: "e9bb2c52-b6e4-49a5-a51a-5bbc3a8ea771",
                username: "purplefrog772",
                password: "bears",
                salt: "A4sKPtPw",
                md5: "65e8707af99af903027b725316a59fe5",
                sha1: "c9f059b6d4f66a2cf532881785b02fbfc999374f",
                sha256: "f3a386135cf32e8a56b6d8a92cadaeebb255e15be0e2b92a5b3409392e4368c9"
            },
            dob: {
                date: "1987-02-23T16:14:45.161Z",
                age: 35
            },
            registered: {
                date: "2017-08-18T15:31:39.340Z",
                age: 5
            },
            phone: "965-964-406",
            cell: "613-305-203",
            id: {
                name: "DNI",
                value: "63484465-K"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/21.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg"
            },
            nat: "ES"
        },
        {
            gender: "female",
            name: {
                title: "Mademoiselle",
                first: "Danielle",
                last: "Meyer"
            },
            location: {
                street: {
                    number: 9286,
                    name: "Rue Abel-Hovelacque"
                },
                city: "Gorgier",
                state: "Vaud",
                country: "Switzerland",
                postcode: 4473,
                coordinates: {
                    latitude: "29.8208",
                    longitude: "-128.5081"
                },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            email: "danielle.meyer@example.com",
            login: {
                uuid: "6509316a-56e6-47a8-a293-b24e55e4ade8",
                username: "angryfish418",
                password: "ronald",
                salt: "O24HDUk8",
                md5: "d9668306a6233c44099bbfa4909ded80",
                sha1: "af963c561087f948ee967866c3e37d62c8ef69d3",
                sha256: "1bc0e0d4f652267d30f8f0e9f5a02bd1028ec9ec2d13b871e10b74a345c23b71"
            },
            dob: {
                date: "1984-02-18T22:29:08.662Z",
                age: 38
            },
            registered: {
                date: "2008-02-28T04:30:25.724Z",
                age: 14
            },
            phone: "075 694 79 98",
            cell: "077 392 18 98",
            id: {
                name: "AVS",
                value: "756.9039.3823.29"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/87.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            },
            nat: "CH"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Elise",
                last: "Brun"
            },
            location: {
                street: {
                    number: 960,
                    name: "Rue de Cuire"
                },
                city: "Rueil-Malmaison",
                state: "Sarthe",
                country: "France",
                postcode: 95202,
                coordinates: {
                    latitude: "-3.8967",
                    longitude: "87.1224"
                },
                timezone: {
                    offset: "-1:00",
                    description: "Azores, Cape Verde Islands"
                }
            },
            email: "elise.brun@example.com",
            login: {
                uuid: "2fc045b4-e760-4af7-8ffd-66f41dfdf05f",
                username: "sadzebra525",
                password: "marie",
                salt: "g6SJyOtk",
                md5: "bf6267a03e71e6e83b4392cb77d6315a",
                sha1: "8269a7dff01dffb5353b1c42ffd2a78a71e2616c",
                sha256: "68b7f5295e3f37cfc9f1b9edb23cf865955c98b474a55d4a1c33a9e26f6cff5d"
            },
            dob: {
                date: "1967-05-06T20:02:13.339Z",
                age: 55
            },
            registered: {
                date: "2002-10-06T16:45:19.594Z",
                age: 20
            },
            phone: "02-67-35-70-69",
            cell: "06-10-76-75-21",
            id: {
                name: "INSEE",
                value: "2670493465923 55"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/19.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg"
            },
            nat: "FR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Edouard",
                last: "Lefevre"
            },
            location: {
                street: {
                    number: 3883,
                    name: "Place du 22 Novembre 1943"
                },
                city: "Saint-Étienne",
                state: "Seine-Maritime",
                country: "France",
                postcode: 85402,
                coordinates: {
                    latitude: "-27.7425",
                    longitude: "123.2555"
                },
                timezone: {
                    offset: "-3:00",
                    description: "Brazil, Buenos Aires, Georgetown"
                }
            },
            email: "edouard.lefevre@example.com",
            login: {
                uuid: "453f6841-e617-4cdf-9eb9-6a529bf76035",
                username: "whitezebra257",
                password: "justdoit",
                salt: "4GFOgntt",
                md5: "e79ccd83454f6b6bc733332d656aa199",
                sha1: "0f0767dabb40fda1ebefe7f20f5678533276868e",
                sha256: "b6a88c1df6a9d853aa42d38f3e0d719792e147fc26eff0d6e40494b8927e8453"
            },
            dob: {
                date: "1993-11-27T04:35:15.032Z",
                age: 29
            },
            registered: {
                date: "2014-05-26T12:37:44.745Z",
                age: 8
            },
            phone: "02-29-55-44-74",
            cell: "06-97-65-81-48",
            id: {
                name: "INSEE",
                value: "1931043140771 91"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/34.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
            },
            nat: "FR"
        },
        {
            gender: "male",
            name: {
                title: "Monsieur",
                first: "Raul",
                last: "Moreau"
            },
            location: {
                street: {
                    number: 7076,
                    name: "Rue du Dauphiné"
                },
                city: "Trélex",
                state: "Appenzell Innerrhoden",
                country: "Switzerland",
                postcode: 3710,
                coordinates: {
                    latitude: "23.3386",
                    longitude: "80.4129"
                },
                timezone: {
                    offset: "-11:00",
                    description: "Midway Island, Samoa"
                }
            },
            email: "raul.moreau@example.com",
            login: {
                uuid: "68c09f20-cab8-443e-97a8-f356038564dd",
                username: "beautifulelephant642",
                password: "272727",
                salt: "krb7THOf",
                md5: "2388e22ae380c6ed06c14704c8959429",
                sha1: "142166e82620633382fcf30a5a56c69c9449f510",
                sha256: "1097e920b6aea2f85d7f7ebbe2fb81e8ab6d0d0dfa288909e17652e12cfe82e3"
            },
            dob: {
                date: "1983-03-12T03:23:40.292Z",
                age: 39
            },
            registered: {
                date: "2013-02-17T15:40:40.823Z",
                age: 9
            },
            phone: "079 957 50 77",
            cell: "076 983 64 86",
            id: {
                name: "AVS",
                value: "756.9276.4628.35"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/67.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg"
            },
            nat: "CH"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Joshua",
                last: "Roberts"
            },
            location: {
                street: {
                    number: 7991,
                    name: "Market Street"
                },
                city: "Invercargill",
                state: "Bay of Plenty",
                country: "New Zealand",
                postcode: 26524,
                coordinates: {
                    latitude: "60.8045",
                    longitude: "144.8311"
                },
                timezone: {
                    offset: "-1:00",
                    description: "Azores, Cape Verde Islands"
                }
            },
            email: "joshua.roberts@example.com",
            login: {
                uuid: "88a13457-ff2d-4954-8f89-76b7fc98e16c",
                username: "sadmeercat256",
                password: "lian",
                salt: "sG4yczCL",
                md5: "1e26f10aeb7e5bac965faf1193c03847",
                sha1: "1ab1f3694d9ac8f80435fc9c1cabb8f34c14a161",
                sha256: "2c1d2a88978ce042fc38199a5e8c03164403f6f90a396e6f56ebceeac8a349d2"
            },
            dob: {
                date: "1998-07-23T05:51:42.853Z",
                age: 24
            },
            registered: {
                date: "2018-05-04T22:49:25.469Z",
                age: 4
            },
            phone: "(997)-783-0294",
            cell: "(902)-941-1036",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/2.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg"
            },
            nat: "NZ"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Suzy",
                last: "West"
            },
            location: {
                street: {
                    number: 9388,
                    name: "Park Road"
                },
                city: "Worcester",
                state: "South Yorkshire",
                country: "United Kingdom",
                postcode: "N63 9PF",
                coordinates: {
                    latitude: "-7.1441",
                    longitude: "-39.7945"
                },
                timezone: {
                    offset: "-9:00",
                    description: "Alaska"
                }
            },
            email: "suzy.west@example.com",
            login: {
                uuid: "271cb226-cb0b-4cd1-b240-fb8a10139a8a",
                username: "yellowgorilla456",
                password: "cherries",
                salt: "L27mJCBq",
                md5: "4b66e917aa2c5e67389c12b50a5b09c6",
                sha1: "928bbeebbbe8dcf8fb986f6dc5ad659d8b2337f8",
                sha256: "21e00fdad2ce828decb727fdfd42b2636aeea56ee5ce7b4b05be5911afdd6dd1"
            },
            dob: {
                date: "1962-06-22T06:20:44.303Z",
                age: 60
            },
            registered: {
                date: "2019-08-18T20:52:55.009Z",
                age: 3
            },
            phone: "017683 18324",
            cell: "07746 176080",
            id: {
                name: "NINO",
                value: "BS 33 86 14 A"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/62.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg"
            },
            nat: "GB"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Rian",
                last: "Westbroek"
            },
            location: {
                street: {
                    number: 9739,
                    name: "Korte Voorhout"
                },
                city: "Maastricht",
                state: "Flevoland",
                country: "Netherlands",
                postcode: "0745 YR",
                coordinates: {
                    latitude: "-35.7861",
                    longitude: "163.7786"
                },
                timezone: {
                    offset: "-6:00",
                    description: "Central Time (US & Canada), Mexico City"
                }
            },
            email: "rian.westbroek@example.com",
            login: {
                uuid: "e8c90bb5-fc6a-47ca-b4c9-7a3d69c3996c",
                username: "sadwolf821",
                password: "jetta",
                salt: "ycDuYd3N",
                md5: "fa7e3d7d02762548a98fbdf212beca6e",
                sha1: "3dba931216194c4bc556a640ef848ab33256e685",
                sha256: "6ef20a3a6b605d965f905c538fea0210e08ff48ebd668657c35945102a027d4b"
            },
            dob: {
                date: "1947-10-31T19:07:16.215Z",
                age: 75
            },
            registered: {
                date: "2013-04-21T18:02:53.931Z",
                age: 9
            },
            phone: "(0806) 552174",
            cell: "(06) 24014271",
            id: {
                name: "BSN",
                value: "93256875"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/77.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/77.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/77.jpg"
            },
            nat: "NL"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Hugo",
                last: "Walker"
            },
            location: {
                street: {
                    number: 5423,
                    name: "Sherborne Street"
                },
                city: "Taupo",
                state: "Northland",
                country: "New Zealand",
                postcode: 67066,
                coordinates: {
                    latitude: "4.1691",
                    longitude: "-55.3085"
                },
                timezone: {
                    offset: "-9:00",
                    description: "Alaska"
                }
            },
            email: "hugo.walker@example.com",
            login: {
                uuid: "1248e606-798b-492f-80fe-bce503f7e14e",
                username: "heavydog688",
                password: "custom",
                salt: "firtpLrT",
                md5: "0ad4bd4e1ef8dc7a5c76182cfd425d32",
                sha1: "4a7277e2c10febed32037b2a449a0415bfbc05ca",
                sha256: "c9ffc84c6f670a62eaee296896dccc362fe8d14bf5bcc7b45173af93570506e1"
            },
            dob: {
                date: "1999-04-25T08:23:01.247Z",
                age: 23
            },
            registered: {
                date: "2021-12-27T07:09:12.289Z",
                age: 1
            },
            phone: "(178)-339-8006",
            cell: "(532)-583-1892",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/32.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg"
            },
            nat: "NZ"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Zoe",
                last: "Wright"
            },
            location: {
                street: {
                    number: 7920,
                    name: "Northgate"
                },
                city: "Taupo",
                state: "Nelson",
                country: "New Zealand",
                postcode: 70754,
                coordinates: {
                    latitude: "-16.5402",
                    longitude: "-142.3958"
                },
                timezone: {
                    offset: "-1:00",
                    description: "Azores, Cape Verde Islands"
                }
            },
            email: "zoe.wright@example.com",
            login: {
                uuid: "215a7bef-f1f9-4fc2-9df3-97743f665da8",
                username: "crazywolf378",
                password: "longjohn",
                salt: "VWDiRa3q",
                md5: "51bd12057c8e764b5711c4237322abd6",
                sha1: "da86e71a751e88945e91bd4a61386bf9e4a7f676",
                sha256: "280e5eebed8f5ab77c8a2518e6ffa2b341b23ad133f259a16cf37003b2f44371"
            },
            dob: {
                date: "1987-03-21T11:33:24.094Z",
                age: 35
            },
            registered: {
                date: "2008-07-30T09:34:46.944Z",
                age: 14
            },
            phone: "(618)-775-7631",
            cell: "(755)-630-3276",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/26.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg"
            },
            nat: "NZ"
        },
        {
            gender: "male",
            name: {
                title: "Monsieur",
                first: "Evan",
                last: "Marie"
            },
            location: {
                street: {
                    number: 239,
                    name: "Rue du Dauphiné"
                },
                city: "Seedorf (Be)",
                state: "Glarus",
                country: "Switzerland",
                postcode: 4141,
                coordinates: {
                    latitude: "-52.3166",
                    longitude: "11.9564"
                },
                timezone: {
                    offset: "-10:00",
                    description: "Hawaii"
                }
            },
            email: "evan.marie@example.com",
            login: {
                uuid: "eae42ef3-35d2-4adb-96e8-6117c47ab6cb",
                username: "goldendog648",
                password: "fishy",
                salt: "0fjESjfM",
                md5: "744fc6d90923e3182b54802e06c62507",
                sha1: "6d2f29754fdcac4148604181e294f02024091434",
                sha256: "b931e611c77ba28d1aadb1723fc842247b69fd61d5615844efcfd1e36109ff66"
            },
            dob: {
                date: "1992-07-24T20:07:54.733Z",
                age: 30
            },
            registered: {
                date: "2020-12-03T22:32:18.388Z",
                age: 2
            },
            phone: "075 645 37 03",
            cell: "079 433 79 71",
            id: {
                name: "AVS",
                value: "756.9440.6208.34"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/45.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
            },
            nat: "CH"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Leo",
                last: "Young"
            },
            location: {
                street: {
                    number: 4181,
                    name: "York St"
                },
                city: "Princeton",
                state: "British Columbia",
                country: "Canada",
                postcode: "G6D 4Z4",
                coordinates: {
                    latitude: "-9.0530",
                    longitude: "-6.1128"
                },
                timezone: {
                    offset: "-2:00",
                    description: "Mid-Atlantic"
                }
            },
            email: "leo.young@example.com",
            login: {
                uuid: "5f6039a2-b3be-4a74-a68c-551b47514f6f",
                username: "angrybear233",
                password: "second",
                salt: "y8ioUUar",
                md5: "ef50c0f12d7476fa869b4efad89c7d64",
                sha1: "e5e6eb6c97733bab6bc7ea56f94a60eddce08f31",
                sha256: "c2998bc58e1de4644026609d461860c6d0520bcc8af24e4e8db15facab711d0e"
            },
            dob: {
                date: "1951-07-29T15:13:23.478Z",
                age: 71
            },
            registered: {
                date: "2011-01-29T00:56:35.191Z",
                age: 12
            },
            phone: "N84 J86-1345",
            cell: "T15 U81-4071",
            id: {
                name: "SIN",
                value: "075727339"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/14.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg"
            },
            nat: "CA"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Océane",
                last: "Dumont"
            },
            location: {
                street: {
                    number: 8962,
                    name: "Rue Principale"
                },
                city: "Marseille",
                state: "Vendée",
                country: "France",
                postcode: 45731,
                coordinates: {
                    latitude: "-33.6371",
                    longitude: "-156.7455"
                },
                timezone: {
                    offset: "+9:30",
                    description: "Adelaide, Darwin"
                }
            },
            email: "oceane.dumont@example.com",
            login: {
                uuid: "c1d1f090-d163-4d63-b5b6-1c1fe7578cb8",
                username: "blackpeacock116",
                password: "help",
                salt: "Jiz7hw7W",
                md5: "5fea27cc44702c1f1df9e9c3cddeabb6",
                sha1: "3d5aef60f34bb88794480906a894a64d81606e5b",
                sha256: "fe19976c4298d9c894c45ebdb02eeb57ec62d30631a052c280a52f3eae6def8e"
            },
            dob: {
                date: "1957-07-07T06:05:00.175Z",
                age: 65
            },
            registered: {
                date: "2017-01-08T04:56:14.656Z",
                age: 6
            },
            phone: "05-40-42-32-88",
            cell: "06-61-21-04-30",
            id: {
                name: "INSEE",
                value: "2570625896844 38"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/8.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg"
            },
            nat: "FR"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Line",
                last: "Vincent"
            },
            location: {
                street: {
                    number: 8495,
                    name: "Rue des Chartreux"
                },
                city: "Aubervilliers",
                state: "Territoire De Belfort",
                country: "France",
                postcode: 39514,
                coordinates: {
                    latitude: "-25.9120",
                    longitude: "91.7572"
                },
                timezone: {
                    offset: "+4:30",
                    description: "Kabul"
                }
            },
            email: "line.vincent@example.com",
            login: {
                uuid: "4c2a920b-b793-4ca1-9096-a52d6d4108a5",
                username: "angrytiger701",
                password: "nemesis",
                salt: "JW9hzQIS",
                md5: "d4f8cb51c16c1840d83f3fb20039730f",
                sha1: "16c0f9b42caa0d7b2861cf56d3ae72a2c153b45e",
                sha256: "75effe4b25a7bece9184756201b22da9fd7a920659a41417620b00f8f3710208"
            },
            dob: {
                date: "1982-04-17T11:23:54.699Z",
                age: 40
            },
            registered: {
                date: "2021-01-07T09:51:56.459Z",
                age: 2
            },
            phone: "03-52-54-12-25",
            cell: "06-57-07-61-37",
            id: {
                name: "INSEE",
                value: "2820367025888 49"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/70.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg"
            },
            nat: "FR"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Kiara",
                last: "Lopez"
            },
            location: {
                street: {
                    number: 6520,
                    name: "Avenue Paul Eluard"
                },
                city: "Brest",
                state: "Loire",
                country: "France",
                postcode: 83049,
                coordinates: {
                    latitude: "76.0298",
                    longitude: "9.0112"
                },
                timezone: {
                    offset: "+3:30",
                    description: "Tehran"
                }
            },
            email: "kiara.lopez@example.com",
            login: {
                uuid: "3dae8c5e-b3c7-4006-adad-ca61b55da270",
                username: "brownswan872",
                password: "judith",
                salt: "uaQHRfvX",
                md5: "f264b18e84d8216be8b25ec55edcc78c",
                sha1: "17684b7c3045111b4946f340d7c4fa29a3d87585",
                sha256: "4436b8c30d136b3f3cc7d096757026cbe70b7b17f5e02a60e030e68fd038f562"
            },
            dob: {
                date: "1968-07-24T06:22:44.070Z",
                age: 54
            },
            registered: {
                date: "2016-02-11T15:46:53.235Z",
                age: 6
            },
            phone: "05-82-71-00-45",
            cell: "06-60-42-87-23",
            id: {
                name: "INSEE",
                value: "2680682105954 46"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/76.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg"
            },
            nat: "FR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Divyesh",
                last: "Rao"
            },
            location: {
                street: {
                    number: 6634,
                    name: "College St"
                },
                city: "Uluberia",
                state: "Tripura",
                country: "India",
                postcode: 55244,
                coordinates: {
                    latitude: "31.4352",
                    longitude: "-52.6888"
                },
                timezone: {
                    offset: "-1:00",
                    description: "Azores, Cape Verde Islands"
                }
            },
            email: "divyesh.rao@example.com",
            login: {
                uuid: "cf3ff821-6075-4d0e-a7bf-c08ce89f9722",
                username: "organicelephant461",
                password: "66666",
                salt: "M7uvsOuT",
                md5: "d138b6ba135251f34df5d2aded34a0ac",
                sha1: "720243b735ffb00e893a7ab37b78795beba98e49",
                sha256: "639f008eafe4f458d5ee843652554255ba9a463e8dd857c64c7003d7aa21064f"
            },
            dob: {
                date: "1980-08-11T19:40:18.315Z",
                age: 42
            },
            registered: {
                date: "2015-01-15T19:36:25.587Z",
                age: 8
            },
            phone: "9849556988",
            cell: "8553114829",
            id: {
                name: "UIDAI",
                value: "955867373623"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/7.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg"
            },
            nat: "IN"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "آرش",
                last: "سالاری"
            },
            location: {
                street: {
                    number: 4994,
                    name: "حقانی"
                },
                city: "قزوین",
                state: "مرکزی",
                country: "Iran",
                postcode: 74937,
                coordinates: {
                    latitude: "80.0659",
                    longitude: "121.7262"
                },
                timezone: {
                    offset: "+3:30",
                    description: "Tehran"
                }
            },
            email: "arsh.slry@example.com",
            login: {
                uuid: "099832c6-f461-4273-81f5-49adc80c79fa",
                username: "goldenbird230",
                password: "arrow",
                salt: "rl057hbS",
                md5: "a84690f08b4e945d856f1e809d266efd",
                sha1: "ba1e469ab9dbf86c6cc57b40350a976350a5e5d2",
                sha256: "c247b209a9ebf2d7436255beb990d61d120bc6d1e561f90a0a818dbcfd5e839b"
            },
            dob: {
                date: "1971-11-28T20:36:41.697Z",
                age: 51
            },
            registered: {
                date: "2006-11-03T23:51:11.352Z",
                age: 16
            },
            phone: "075-14271613",
            cell: "0920-797-2063",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/70.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
            },
            nat: "IR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Rahul",
                last: "Uchil"
            },
            location: {
                street: {
                    number: 7373,
                    name: "Tilak Marg"
                },
                city: "Pudukkottai",
                state: "Mizoram",
                country: "India",
                postcode: 27530,
                coordinates: {
                    latitude: "53.8259",
                    longitude: "-34.3246"
                },
                timezone: {
                    offset: "+9:00",
                    description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            email: "rahul.uchil@example.com",
            login: {
                uuid: "7c18cb8a-1245-4394-b472-aff53cd45fe0",
                username: "blackbird897",
                password: "boston",
                salt: "BnWiV41I",
                md5: "7808f901459cc1f96b93bf9f5d0e5cbf",
                sha1: "bbbece52c19f78ed544e8096b11ac73ff2b0fd30",
                sha256: "892d83ae068ad035eddca5fe18fde80c3271d9933569517bcd900df9208cc14c"
            },
            dob: {
                date: "1987-06-22T22:49:49.485Z",
                age: 35
            },
            registered: {
                date: "2014-08-26T20:46:02.925Z",
                age: 8
            },
            phone: "9039634749",
            cell: "9016141883",
            id: {
                name: "UIDAI",
                value: "245976947891"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/82.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/82.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/82.jpg"
            },
            nat: "IN"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Claudia",
                last: "Morales"
            },
            location: {
                street: {
                    number: 3037,
                    name: "Calle del Arenal"
                },
                city: "Valladolid",
                state: "País Vasco",
                country: "Spain",
                postcode: 43151,
                coordinates: {
                    latitude: "-84.7433",
                    longitude: "55.2628"
                },
                timezone: {
                    offset: "-10:00",
                    description: "Hawaii"
                }
            },
            email: "claudia.morales@example.com",
            login: {
                uuid: "8539d42d-e3c8-4fff-ac9b-7acc72b0d484",
                username: "silverlion473",
                password: "dragon",
                salt: "8G6Yt1Hr",
                md5: "717f458092c836c9acb0473b22df7023",
                sha1: "49c74cc242d4218ab1bbe78010e3f751f4d04905",
                sha256: "91640d5a5a337aa4e4f78ee70aebad9c1a2233f5d8bfb3ae069d6ebc2d3f0f21"
            },
            dob: {
                date: "1962-01-16T22:34:59.891Z",
                age: 61
            },
            registered: {
                date: "2013-12-15T06:44:03.281Z",
                age: 9
            },
            phone: "985-125-356",
            cell: "643-029-772",
            id: {
                name: "DNI",
                value: "95821434-U"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/2.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg"
            },
            nat: "ES"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Adam",
                last: "King"
            },
            location: {
                street: {
                    number: 3801,
                    name: "Pearse Street"
                },
                city: "Ratoath",
                state: "Galway",
                country: "Ireland",
                postcode: 22055,
                coordinates: {
                    latitude: "81.2601",
                    longitude: "-68.5267"
                },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            email: "adam.king@example.com",
            login: {
                uuid: "c54a2ccb-9c95-42c9-9b61-63b9244910cc",
                username: "smallwolf222",
                password: "meowmeow",
                salt: "hyvxpStp",
                md5: "1ad36c1ecc93bdb73a696e546daf5217",
                sha1: "e8f76f81af2962526cc75eaa4e9428f0b74e6ba7",
                sha256: "163e1467cc7aba3fcb7e114c72d2d45358a5690ca1ceed5e00e3b1dd76b69de9"
            },
            dob: {
                date: "1952-12-25T01:05:47.766Z",
                age: 70
            },
            registered: {
                date: "2009-04-06T15:20:06.460Z",
                age: 13
            },
            phone: "031-535-4109",
            cell: "081-361-8797",
            id: {
                name: "PPS",
                value: "1719039T"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/13.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
            },
            nat: "IE"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Michael",
                last: "Nordtømme"
            },
            location: {
                street: {
                    number: 3267,
                    name: "Eikeveien"
                },
                city: "Terråk",
                state: "Vestfold",
                country: "Norway",
                postcode: "6909",
                coordinates: {
                    latitude: "-29.1192",
                    longitude: "-51.3624"
                },
                timezone: {
                    offset: "0:00",
                    description: "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            email: "michael.nordtomme@example.com",
            login: {
                uuid: "f127b219-5529-4de7-90a7-85c04d745bfb",
                username: "yellowgorilla363",
                password: "elmo",
                salt: "lmkCoeDx",
                md5: "37cf791c2260829ffe0e7189a79a603b",
                sha1: "d68d943390fe813905d60ba70393ac56539d5af7",
                sha256: "129e0af8bb3c7866cb37ddddf8502468181a6a2e8d375d3a0cb53aa7323d4953"
            },
            dob: {
                date: "1980-12-17T18:34:48.876Z",
                age: 42
            },
            registered: {
                date: "2010-02-06T21:48:50.828Z",
                age: 13
            },
            phone: "87062552",
            cell: "48885126",
            id: {
                name: "FN",
                value: "17128030905"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/0.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg"
            },
            nat: "NO"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Isabel",
                last: "Soto"
            },
            location: {
                street: {
                    number: 6409,
                    name: "Calle de Atocha"
                },
                city: "Toledo",
                state: "Andalucía",
                country: "Spain",
                postcode: 23671,
                coordinates: {
                    latitude: "-64.3950",
                    longitude: "146.0837"
                },
                timezone: {
                    offset: "+1:00",
                    description: "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            email: "isabel.soto@example.com",
            login: {
                uuid: "770930d5-7118-4f66-ba19-6f23cb04c002",
                username: "organicleopard121",
                password: "bangbang",
                salt: "51DQKxtr",
                md5: "5cd8e291e3b162605626c3e827143675",
                sha1: "da835593d9b61b9f75e91de6ab5be5397fd8b749",
                sha256: "334efd50b52cedfd227494dab0328dd0b16d8b750e05a3aaaa5d8c5969bc134e"
            },
            dob: {
                date: "1981-12-07T13:04:21.583Z",
                age: 41
            },
            registered: {
                date: "2020-05-26T19:41:27.196Z",
                age: 2
            },
            phone: "920-250-222",
            cell: "689-102-936",
            id: {
                name: "DNI",
                value: "37734725-X"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/93.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg"
            },
            nat: "ES"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Brooke",
                last: "Moore"
            },
            location: {
                street: {
                    number: 3731,
                    name: "Westmoreland Street"
                },
                city: "Kilcoole",
                state: "Cork City",
                country: "Ireland",
                postcode: 76479,
                coordinates: {
                    latitude: "-68.0417",
                    longitude: "-21.9135"
                },
                timezone: {
                    offset: "-4:00",
                    description: "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            email: "brooke.moore@example.com",
            login: {
                uuid: "28d75d91-569b-418c-9271-c20b9b3c56f4",
                username: "angryduck838",
                password: "waterfal",
                salt: "CEFuQCFC",
                md5: "72b8ae710622d6cf7eea73d79dfc6042",
                sha1: "0877aaf7cff5357d97e5a9580c2a614821f9c31a",
                sha256: "fee2a6f68ecd4a3fe41eb8b581b19ce70210b969ed61e6f78b62dde4bb1e95ab"
            },
            dob: {
                date: "1952-02-15T13:02:25.028Z",
                age: 70
            },
            registered: {
                date: "2012-04-02T08:07:41.454Z",
                age: 10
            },
            phone: "041-485-1070",
            cell: "081-032-0604",
            id: {
                name: "PPS",
                value: "7757141T"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/33.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg"
            },
            nat: "IE"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Gauthier",
                last: "Deschamps"
            },
            location: {
                street: {
                    number: 6494,
                    name: "Rue de L'Abbé-Gillet"
                },
                city: "Saint-Pierre",
                state: "Hérault",
                country: "France",
                postcode: 10272,
                coordinates: {
                    latitude: "23.0021",
                    longitude: "-127.3900"
                },
                timezone: {
                    offset: "+11:00",
                    description: "Magadan, Solomon Islands, New Caledonia"
                }
            },
            email: "gauthier.deschamps@example.com",
            login: {
                uuid: "7f669d36-eef7-4f69-a6f1-5fc62c03b1e7",
                username: "redmeercat414",
                password: "princess",
                salt: "xoJQSBxA",
                md5: "96b6e84a84cecd28943bdab40c9869db",
                sha1: "6f5e8cce5b2414e994a206337d4b12661155a4d6",
                sha256: "d5fb209ddc2f4eb90d0e8950985b13dbcb6c439a79d28799d51afc2c1ed94332"
            },
            dob: {
                date: "1946-03-03T20:38:14.039Z",
                age: 76
            },
            registered: {
                date: "2010-03-21T04:13:48.639Z",
                age: 12
            },
            phone: "03-21-05-73-69",
            cell: "06-93-40-99-87",
            id: {
                name: "INSEE",
                value: "1460289586439 04"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/24.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/24.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg"
            },
            nat: "FR"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Leanne",
                last: "Ma"
            },
            location: {
                street: {
                    number: 7047,
                    name: "Victoria Ave"
                },
                city: "Fauquier",
                state: "Northwest Territories",
                country: "Canada",
                postcode: "F8X 7G7",
                coordinates: {
                    latitude: "-87.5273",
                    longitude: "-15.5300"
                },
                timezone: {
                    offset: "-6:00",
                    description: "Central Time (US & Canada), Mexico City"
                }
            },
            email: "leanne.ma@example.com",
            login: {
                uuid: "354dea24-1176-4039-9e9d-766c8f4adb1e",
                username: "crazygorilla142",
                password: "pharmacy",
                salt: "zuh9EQJb",
                md5: "1191d7855d93aa21fb06df4bf63f1c84",
                sha1: "f4f3c976ea1099a2bd6987bab18ff28cc3948f14",
                sha256: "e16748ae3478d6139bd17566dc7ce119ecb7ea122e559a41e716b87216d27ad5"
            },
            dob: {
                date: "1958-07-02T12:54:07.169Z",
                age: 64
            },
            registered: {
                date: "2016-09-23T23:40:50.905Z",
                age: 6
            },
            phone: "U95 P15-4121",
            cell: "L86 E36-9053",
            id: {
                name: "SIN",
                value: "026698639"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/28.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg"
            },
            nat: "CA"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Hugo",
                last: "Guerin"
            },
            location: {
                street: {
                    number: 8488,
                    name: "Rue de la Mairie"
                },
                city: "Pau",
                state: "Alpes-de-Haute-Provence",
                country: "France",
                postcode: 31322,
                coordinates: {
                    latitude: "-30.9701",
                    longitude: "24.2930"
                },
                timezone: {
                    offset: "+1:00",
                    description: "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            email: "hugo.guerin@example.com",
            login: {
                uuid: "cf26a8ba-0eaa-4eb8-8386-23498c0cb25c",
                username: "purplefish103",
                password: "beater",
                salt: "9hsykDeu",
                md5: "0cf9967fc2efcc93c00e71020fa583d1",
                sha1: "67eef82a19e70d1de6e26fb045f3547a33507f2b",
                sha256: "01871bb37d752843bd5d97a252c19741f0d115b6bb9d0f6db0e12c98122480f5"
            },
            dob: {
                date: "1948-06-28T21:03:22.409Z",
                age: 74
            },
            registered: {
                date: "2019-02-07T23:37:19.373Z",
                age: 4
            },
            phone: "03-39-07-25-24",
            cell: "06-86-86-75-11",
            id: {
                name: "INSEE",
                value: "1480545881856 23"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/19.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg"
            },
            nat: "FR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Francisco",
                last: "Rubio"
            },
            location: {
                street: {
                    number: 5014,
                    name: "Calle del Arenal"
                },
                city: "Barcelona",
                state: "Canarias",
                country: "Spain",
                postcode: 14805,
                coordinates: {
                    latitude: "25.4438",
                    longitude: "94.7124"
                },
                timezone: {
                    offset: "+10:00",
                    description: "Eastern Australia, Guam, Vladivostok"
                }
            },
            email: "francisco.rubio@example.com",
            login: {
                uuid: "048ddd6f-7929-4a13-8c50-b8b15c73dd6b",
                username: "tinyladybug418",
                password: "farm",
                salt: "OaztnlL1",
                md5: "359a611db078a60a26717934df8ac29e",
                sha1: "125d5f54617aff72db756398aa479f788da0cbfe",
                sha256: "522fb4414271dd986017d0c561d24aa744eb90313bf1f9394d1fba40150d46f5"
            },
            dob: {
                date: "1947-10-04T03:55:02.483Z",
                age: 75
            },
            registered: {
                date: "2016-02-27T19:40:37.119Z",
                age: 6
            },
            phone: "951-526-260",
            cell: "643-332-735",
            id: {
                name: "DNI",
                value: "32845909-B"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/83.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg"
            },
            nat: "ES"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Eva",
                last: "Santiago"
            },
            location: {
                street: {
                    number: 6866,
                    name: "Prolongación Guinea Ecuatorial"
                },
                city: "El Puesto",
                state: "Nayarit",
                country: "Mexico",
                postcode: 94518,
                coordinates: {
                    latitude: "51.1708",
                    longitude: "147.8971"
                },
                timezone: {
                    offset: "+6:00",
                    description: "Almaty, Dhaka, Colombo"
                }
            },
            email: "eva.santiago@example.com",
            login: {
                uuid: "d4b20069-a073-4db4-9e42-08f87805b6a3",
                username: "goldenfrog967",
                password: "review",
                salt: "RNzAGr80",
                md5: "12fc20fdae4e416f6afc867ac8dd849e",
                sha1: "62824db1f4785dbfd453786cc6d8090a45c5804f",
                sha256: "af299fcf568bdcd1358fa99740bb50eea3e32d99420ccb6373c0d1634705e657"
            },
            dob: {
                date: "1963-07-11T04:41:13.835Z",
                age: 59
            },
            registered: {
                date: "2002-04-05T12:15:49.732Z",
                age: 20
            },
            phone: "(674) 536 8746",
            cell: "(659) 464 9656",
            id: {
                name: "NSS",
                value: "06 19 60 8894 9"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/29.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg"
            },
            nat: "MX"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Kaspar",
                last: "Sell"
            },
            location: {
                street: {
                    number: 8667,
                    name: "Mühlweg"
                },
                city: "Solms",
                state: "Rheinland-Pfalz",
                country: "Germany",
                postcode: 87445,
                coordinates: {
                    latitude: "84.7400",
                    longitude: "149.2329"
                },
                timezone: {
                    offset: "+4:00",
                    description: "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            email: "kaspar.sell@example.com",
            login: {
                uuid: "8af554a5-b094-46aa-9bd7-f88afcd69952",
                username: "lazysnake535",
                password: "physics",
                salt: "lb86L2t1",
                md5: "fa942b00a0ca38272a14aa338c0e36e4",
                sha1: "0b530d2ef6189bbd7c5af294ce8ee0119d0d0979",
                sha256: "58e55b02d4d5e0546fd23ecc6a53660fb851a5408883555e052c58c5bf39a6d0"
            },
            dob: {
                date: "1954-02-28T06:05:23.342Z",
                age: 68
            },
            registered: {
                date: "2010-10-02T14:25:11.067Z",
                age: 12
            },
            phone: "0397-3220117",
            cell: "0175-2897341",
            id: {
                name: "SVNR",
                value: "17 280254 S 243"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/28.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
            },
            nat: "DE"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Hajo",
                last: "Koets"
            },
            location: {
                street: {
                    number: 8271,
                    name: "Biest"
                },
                city: "Wamel",
                state: "Noord-Holland",
                country: "Netherlands",
                postcode: "8584 OG",
                coordinates: {
                    latitude: "-56.6809",
                    longitude: "-30.0835"
                },
                timezone: {
                    offset: "-9:00",
                    description: "Alaska"
                }
            },
            email: "hajo.koets@example.com",
            login: {
                uuid: "e3ef88ea-c5b5-4935-9014-973bab42fef2",
                username: "purpletiger221",
                password: "spliff",
                salt: "zBgxzJwl",
                md5: "7f36d15154c26ae5b0efd7e6619a1001",
                sha1: "d2877535f1feb59990f32c004b693915ccc93287",
                sha256: "5d7d4d3700dc7077d2cce2b75d255ea998fb8d3712fd32289f14df5c5b14caf6"
            },
            dob: {
                date: "1984-06-05T23:56:15.740Z",
                age: 38
            },
            registered: {
                date: "2009-06-05T13:46:01.667Z",
                age: 13
            },
            phone: "(0867) 486845",
            cell: "(06) 54303855",
            id: {
                name: "BSN",
                value: "45877520"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/22.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
            },
            nat: "NL"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Vilho",
                last: "Wirkkala"
            },
            location: {
                street: {
                    number: 271,
                    name: "Visiokatu"
                },
                city: "Isojoki",
                state: "Kainuu",
                country: "Finland",
                postcode: 46612,
                coordinates: {
                    latitude: "-85.8318",
                    longitude: "77.7634"
                },
                timezone: {
                    offset: "+9:00",
                    description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            email: "vilho.wirkkala@example.com",
            login: {
                uuid: "151273bc-9274-4b3a-a530-cec30a582bfe",
                username: "brownswan905",
                password: "wwwww",
                salt: "esBykzy0",
                md5: "c9afabcab6220eef2282e051ec98e942",
                sha1: "09c77be5f2467739f422b9bd4e5fc353ebdc2e0f",
                sha256: "b5071d70f01dff6a84c2c2c3d56589577201e188d0e83923ad1f769947d2fda1"
            },
            dob: {
                date: "1956-12-02T05:02:36.375Z",
                age: 66
            },
            registered: {
                date: "2015-09-21T12:40:08.188Z",
                age: 7
            },
            phone: "09-951-153",
            cell: "047-155-23-60",
            id: {
                name: "HETU",
                value: "NaNNA535undefined"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/14.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg"
            },
            nat: "FI"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Penny",
                last: "Douglas"
            },
            location: {
                street: {
                    number: 7754,
                    name: "Washington Ave"
                },
                city: "Tamworth",
                state: "South Australia",
                country: "Australia",
                postcode: 9448,
                coordinates: {
                    latitude: "42.7246",
                    longitude: "167.6636"
                },
                timezone: {
                    offset: "-2:00",
                    description: "Mid-Atlantic"
                }
            },
            email: "penny.douglas@example.com",
            login: {
                uuid: "ba373c2c-ed82-421e-89df-05f947c7ea12",
                username: "bigbear932",
                password: "snowboar",
                salt: "B8RrqZj9",
                md5: "3f53d15ccd2166f8b19cc4912391e288",
                sha1: "e37f824ec687ed6aa5dffdd31cb072766eaab3cf",
                sha256: "e32396b370cd446a41735cb7e8da79957454e80fc615eb627784c1c25e0873ef"
            },
            dob: {
                date: "1985-12-01T19:45:08.364Z",
                age: 37
            },
            registered: {
                date: "2017-05-01T10:46:42.846Z",
                age: 5
            },
            phone: "08-6113-3190",
            cell: "0483-196-329",
            id: {
                name: "TFN",
                value: "911299739"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/43.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg"
            },
            nat: "AU"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Anna",
                last: "Thomsen"
            },
            location: {
                street: {
                    number: 1061,
                    name: "Skovgade"
                },
                city: "Pandrup",
                state: "Syddanmark",
                country: "Denmark",
                postcode: 22821,
                coordinates: {
                    latitude: "23.3796",
                    longitude: "-113.8120"
                },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            email: "anna.thomsen@example.com",
            login: {
                uuid: "62cd5369-fbaf-46cd-b14a-39214cee5f8e",
                username: "heavywolf820",
                password: "sunfire",
                salt: "TkaKldZv",
                md5: "f8835ca2f604c9fd60a6f059caed9bdb",
                sha1: "70ef4178657c5ccd3c6e4e07aa7d3c730b806d9b",
                sha256: "8772bf69809fad48df3b9e71aad73d2552d4aaa4e8cf844954e0db6dbaef8107"
            },
            dob: {
                date: "1997-04-22T06:33:23.558Z",
                age: 25
            },
            registered: {
                date: "2011-11-22T14:13:29.984Z",
                age: 11
            },
            phone: "82410095",
            cell: "43108124",
            id: {
                name: "CPR",
                value: "220497-8333"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/77.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/77.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/77.jpg"
            },
            nat: "DK"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Britney",
                last: "Holland"
            },
            location: {
                street: {
                    number: 9217,
                    name: "The Avenue"
                },
                city: "Armagh",
                state: "Worcestershire",
                country: "United Kingdom",
                postcode: "ED6 9GG",
                coordinates: {
                    latitude: "56.4224",
                    longitude: "-68.4871"
                },
                timezone: {
                    offset: "-10:00",
                    description: "Hawaii"
                }
            },
            email: "britney.holland@example.com",
            login: {
                uuid: "d844c864-90e8-4139-88a7-503ebb4f9d42",
                username: "crazyswan120",
                password: "blueball",
                salt: "TCHjTxaH",
                md5: "18c78329aede4fea1d0c5c2c8b4aab59",
                sha1: "672888cb120ce37a6cf09e0751ed785f41fe9939",
                sha256: "914aadc3c844980633842777390acd63b8479059f1d3b198a3488592b3837c36"
            },
            dob: {
                date: "1944-12-26T02:28:39.279Z",
                age: 78
            },
            registered: {
                date: "2021-06-01T00:56:23.137Z",
                age: 1
            },
            phone: "01048 438762",
            cell: "07020 956315",
            id: {
                name: "NINO",
                value: "ZY 04 02 92 I"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/52.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/52.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/52.jpg"
            },
            nat: "GB"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Iker",
                last: "García"
            },
            location: {
                street: {
                    number: 5579,
                    name: "Calle de Pedro Bosch"
                },
                city: "Talavera de la Reina",
                state: "Ceuta",
                country: "Spain",
                postcode: 58534,
                coordinates: {
                    latitude: "-5.0112",
                    longitude: "-42.0705"
                },
                timezone: {
                    offset: "-4:00",
                    description: "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            email: "iker.garcia@example.com",
            login: {
                uuid: "6c800836-ac42-4165-94b5-49cf22526858",
                username: "happyleopard418",
                password: "woowoo",
                salt: "yOvQ72Xh",
                md5: "fcfa4540970cd93817263973ddbe38fb",
                sha1: "dcf679a7a4790c6e3515b479743a96b7d542baf8",
                sha256: "e990fc95889eb0e3ca5602613baddd73c6276ac1afd80631efa916f005c616da"
            },
            dob: {
                date: "1966-02-11T18:35:47.277Z",
                age: 56
            },
            registered: {
                date: "2015-05-12T00:28:50.016Z",
                age: 7
            },
            phone: "977-584-828",
            cell: "645-418-766",
            id: {
                name: "DNI",
                value: "21910695-G"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/5.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg"
            },
            nat: "ES"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Maélie",
                last: "Lucas"
            },
            location: {
                street: {
                    number: 3199,
                    name: "Rue Cyrus-Hugues"
                },
                city: "Mulhouse",
                state: "Ardennes",
                country: "France",
                postcode: 21080,
                coordinates: {
                    latitude: "-15.9357",
                    longitude: "-143.8348"
                },
                timezone: {
                    offset: "-8:00",
                    description: "Pacific Time (US & Canada)"
                }
            },
            email: "maelie.lucas@example.com",
            login: {
                uuid: "0f4a2dce-b2b2-4f06-bc4a-9652df723273",
                username: "browndog887",
                password: "tahoe",
                salt: "ZgMXUIop",
                md5: "8db4dc50f2916430c1517ebcf598fdb7",
                sha1: "4b15822c70020ca4bf44a3328d3c104c1376cd44",
                sha256: "a2562b8b831e84816ab85f94dd789e72ebbaa33f53eee08f09cbfc018492bb4e"
            },
            dob: {
                date: "1975-02-21T18:38:40.388Z",
                age: 47
            },
            registered: {
                date: "2020-08-09T03:13:12.057Z",
                age: 2
            },
            phone: "01-39-04-03-48",
            cell: "06-37-39-87-52",
            id: {
                name: "INSEE",
                value: "2750106686118 19"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/10.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/10.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/10.jpg"
            },
            nat: "FR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Carlos",
                last: "Arias"
            },
            location: {
                street: {
                    number: 6868,
                    name: "Calle Nebrija"
                },
                city: "La Coruña",
                state: "Comunidad Valenciana",
                country: "Spain",
                postcode: 78090,
                coordinates: {
                    latitude: "-77.8773",
                    longitude: "-6.0645"
                },
                timezone: {
                    offset: "-6:00",
                    description: "Central Time (US & Canada), Mexico City"
                }
            },
            email: "carlos.arias@example.com",
            login: {
                uuid: "65f64a60-db0a-4398-85de-d82396b4f7ea",
                username: "goldenlion691",
                password: "penelope",
                salt: "msjdmdIY",
                md5: "e1bad77ed71582d67829e2be04fda93f",
                sha1: "b139d8355fad3fbbd9d2cd7f05c079c947b13532",
                sha256: "81b065f2c7b1c9b8e46fc999cdc2c0bf6d2fcc19f6a65285a4c3da0003eb40b7"
            },
            dob: {
                date: "1978-12-19T05:03:48.092Z",
                age: 44
            },
            registered: {
                date: "2009-07-29T00:15:00.685Z",
                age: 13
            },
            phone: "963-776-399",
            cell: "635-503-720",
            id: {
                name: "DNI",
                value: "83428654-L"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/42.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg"
            },
            nat: "ES"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Anusree",
                last: "Fernandes"
            },
            location: {
                street: {
                    number: 8206,
                    name: "Lindsay St"
                },
                city: "Firozabad",
                state: "Andaman and Nicobar Islands",
                country: "India",
                postcode: 92159,
                coordinates: {
                    latitude: "-3.6832",
                    longitude: "50.7191"
                },
                timezone: {
                    offset: "+4:30",
                    description: "Kabul"
                }
            },
            email: "anusree.fernandes@example.com",
            login: {
                uuid: "6d02ed7a-9644-4198-8aef-40480333de20",
                username: "heavyrabbit718",
                password: "legion",
                salt: "Y4DHOF8a",
                md5: "85867965aa26fc540c358146a3033659",
                sha1: "bfdb9e6a87e683798e57528d61c1aaff883131bf",
                sha256: "c3adba073f2295d8f9866f0bd9c408c5056ec6b66dd496a0f9d5dbdba3339bce"
            },
            dob: {
                date: "1965-03-12T22:11:23.807Z",
                age: 57
            },
            registered: {
                date: "2017-10-12T10:47:20.097Z",
                age: 5
            },
            phone: "9448642774",
            cell: "8396312477",
            id: {
                name: "UIDAI",
                value: "305635897702"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/76.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg"
            },
            nat: "IN"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Molly",
                last: "Thompson"
            },
            location: {
                street: {
                    number: 7221,
                    name: "Pioneer Highway"
                },
                city: "Masterton",
                state: "Manawatu-Wanganui",
                country: "New Zealand",
                postcode: 13719,
                coordinates: {
                    latitude: "-38.4613",
                    longitude: "174.5177"
                },
                timezone: {
                    offset: "+5:30",
                    description: "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            email: "molly.thompson@example.com",
            login: {
                uuid: "595cb56c-49e8-492a-945f-72b7785a787f",
                username: "tinykoala447",
                password: "delilah",
                salt: "c9gsVVR1",
                md5: "6402ad822888e7b6ab126599275a63dc",
                sha1: "2c4205686180e7407c856270a98af1cf5d6c6ce0",
                sha256: "5418983da75ba711b18e7080dcfcedbf5744de5162a46951f760b49ad42fd9ee"
            },
            dob: {
                date: "1985-01-14T20:13:52.469Z",
                age: 38
            },
            registered: {
                date: "2018-11-15T06:33:45.710Z",
                age: 4
            },
            phone: "(941)-355-0194",
            cell: "(396)-947-1076",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/6.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg"
            },
            nat: "NZ"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Mila",
                last: "Spasić"
            },
            location: {
                street: {
                    number: 6964,
                    name: "Dragojla Dudića"
                },
                city: "Blace",
                state: "Kosovo-Pomoravlje",
                country: "Serbia",
                postcode: 45415,
                coordinates: {
                    latitude: "-89.6422",
                    longitude: "-99.8407"
                },
                timezone: {
                    offset: "+8:00",
                    description: "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            email: "mila.spasic@example.com",
            login: {
                uuid: "d27576c8-21b0-4063-8a06-bb8b1726153f",
                username: "bluedog278",
                password: "qazwsxed",
                salt: "npwmHMWE",
                md5: "85c23e1974cd9736a9db380c7eb52799",
                sha1: "0203d776dbaa4d731544bd6283745fb0ebb6e2a7",
                sha256: "0d8dd07323c99b706fb17aaf2f5d2eae19be477103f3d79bf3e7b302b938269a"
            },
            dob: {
                date: "1969-11-22T23:31:54.581Z",
                age: 53
            },
            registered: {
                date: "2019-01-13T03:03:18.302Z",
                age: 4
            },
            phone: "031-5622-600",
            cell: "063-2886-476",
            id: {
                name: "SID",
                value: "318152530"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/30.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/30.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg"
            },
            nat: "RS"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Sedef",
                last: "Mertoğlu"
            },
            location: {
                street: {
                    number: 2236,
                    name: "Talak Göktepe Cd"
                },
                city: "Yalova",
                state: "Tekirdağ",
                country: "Turkey",
                postcode: 91014,
                coordinates: {
                    latitude: "26.8975",
                    longitude: "13.1824"
                },
                timezone: {
                    offset: "+3:00",
                    description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            email: "sedef.mertoglu@example.com",
            login: {
                uuid: "d70639bb-766b-4b95-8638-4218b5aef660",
                username: "heavyswan950",
                password: "meier",
                salt: "QgOIGPWp",
                md5: "8e4f168f3969eefa8f4d60122e079f49",
                sha1: "dbaacd3d8516e85700f73c48916fddf6e32fd812",
                sha256: "0ebcf18f029c580e733bcf351e8781b26f96e5109292783f29c4699347488da7"
            },
            dob: {
                date: "1965-11-18T08:34:55.895Z",
                age: 57
            },
            registered: {
                date: "2011-10-08T12:29:09.055Z",
                age: 11
            },
            phone: "(565)-158-0909",
            cell: "(571)-167-4018",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/95.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/95.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/95.jpg"
            },
            nat: "TR"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Elma",
                last: "Kropf"
            },
            location: {
                street: {
                    number: 4903,
                    name: "Parkstraße"
                },
                city: "Offenbach",
                state: "Berlin",
                country: "Germany",
                postcode: 70658,
                coordinates: {
                    latitude: "88.6063",
                    longitude: "144.1411"
                },
                timezone: {
                    offset: "-11:00",
                    description: "Midway Island, Samoa"
                }
            },
            email: "elma.kropf@example.com",
            login: {
                uuid: "dcdf8da6-5f1c-4b93-bbe5-66652f7a90a4",
                username: "tinysnake263",
                password: "tomtom",
                salt: "p0BTEwx1",
                md5: "5ce3fccc4e41a66f7467d15a9c176d85",
                sha1: "2ca2231cc081cb47017fbe9d75c83a192324f4a7",
                sha256: "4d825f790abe9b12c36947c2918d6fc160200a18cf4a7bd201ec04d7816d257c"
            },
            dob: {
                date: "1960-06-22T09:12:23.171Z",
                age: 62
            },
            registered: {
                date: "2016-04-09T17:14:36.998Z",
                age: 6
            },
            phone: "0289-4209747",
            cell: "0176-6947517",
            id: {
                name: "SVNR",
                value: "19 220660 K 622"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/16.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg"
            },
            nat: "DE"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Osipa",
                last: "Dobrilovskiy"
            },
            location: {
                street: {
                    number: 5399,
                    name: "Mihayla Grushevskogo"
                },
                city: "Kam'yanka",
                state: "Lvivska",
                country: "Ukraine",
                postcode: 46045,
                coordinates: {
                    latitude: "-14.5156",
                    longitude: "-163.1757"
                },
                timezone: {
                    offset: "+4:00",
                    description: "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            email: "osipa.dobrilovskiy@example.com",
            login: {
                uuid: "3b4ce893-8623-426d-9269-f08586648036",
                username: "orangeladybug938",
                password: "kangaroo",
                salt: "HjXkbZl7",
                md5: "e9246308cd2f6c88b58792dc171755fa",
                sha1: "021dd57312b990cffe26f01bb988613650a61d86",
                sha256: "2de32d7cd69d0c33195a59ca90258048e96205ebcdfc664c858e5f4e834cdd45"
            },
            dob: {
                date: "1957-06-16T07:36:57.857Z",
                age: 65
            },
            registered: {
                date: "2011-03-19T03:47:02.206Z",
                age: 11
            },
            phone: "(098) Y22-6826",
            cell: "(098) K99-9305",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/60.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg"
            },
            nat: "UA"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Virgílio",
                last: "Nogueira"
            },
            location: {
                street: {
                    number: 9943,
                    name: "Rua Alagoas "
                },
                city: "Juazeiro",
                state: "Paraná",
                country: "Brazil",
                postcode: 56920,
                coordinates: {
                    latitude: "74.5746",
                    longitude: "-156.2894"
                },
                timezone: {
                    offset: "+5:30",
                    description: "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            email: "virgilio.nogueira@example.com",
            login: {
                uuid: "3a9fd95e-3dec-43c6-8567-daa03f146271",
                username: "heavyelephant312",
                password: "babes",
                salt: "AaBYu2et",
                md5: "8a09bfd43d4c501146593768b3aeca88",
                sha1: "b10418daeb59259c489856cffa2ddca1006d97de",
                sha256: "c502f290397c313315e5694699a8644ceb6c67d0168d9d75a29537e93369e7f1"
            },
            dob: {
                date: "1989-07-09T02:26:46.047Z",
                age: 33
            },
            registered: {
                date: "2005-07-22T14:28:43.597Z",
                age: 17
            },
            phone: "(08) 2104-9758",
            cell: "(09) 0493-6399",
            id: {
                name: "CPF",
                value: "852.484.901-02"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/32.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg"
            },
            nat: "BR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Carmelo",
                last: "León"
            },
            location: {
                street: {
                    number: 5439,
                    name: "Calle de La Almudena"
                },
                city: "Jerez de la Frontera",
                state: "País Vasco",
                country: "Spain",
                postcode: 37990,
                coordinates: {
                    latitude: "-31.2095",
                    longitude: "-134.8190"
                },
                timezone: {
                    offset: "+2:00",
                    description: "Kaliningrad, South Africa"
                }
            },
            email: "carmelo.leon@example.com",
            login: {
                uuid: "a401d384-f0b4-4847-9be9-c82178ee1e8a",
                username: "angryrabbit783",
                password: "hewlett",
                salt: "8cSFUtj2",
                md5: "67c1fd558d7d2f62d208898f56815dfb",
                sha1: "438e3452a99511766d25c94ccf7a1687d1456566",
                sha256: "e711483119848e48694c799a4faed908a4f73202e5e9399e4ed6b332da97879e"
            },
            dob: {
                date: "1949-08-30T10:30:08.200Z",
                age: 73
            },
            registered: {
                date: "2004-04-23T01:10:02.349Z",
                age: 18
            },
            phone: "922-785-065",
            cell: "641-893-965",
            id: {
                name: "DNI",
                value: "33374096-S"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/49.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg"
            },
            nat: "ES"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Darío",
                last: "Orosco"
            },
            location: {
                street: {
                    number: 790,
                    name: "Privada Oquendo"
                },
                city: "La Manzanilla",
                state: "Quintana Roo",
                country: "Mexico",
                postcode: 60592,
                coordinates: {
                    latitude: "-32.8186",
                    longitude: "-89.0312"
                },
                timezone: {
                    offset: "+3:30",
                    description: "Tehran"
                }
            },
            email: "dario.orosco@example.com",
            login: {
                uuid: "6de8c130-a065-4339-95e7-50bd9294a3b0",
                username: "beautifulrabbit782",
                password: "1223",
                salt: "fu7XaQyi",
                md5: "4ece98cf97b2a3ab9f99c31ba3eedac7",
                sha1: "fa14e48884e2e7225d7a10a1412e8c4f6aa2958c",
                sha256: "1e88a50108ccb5582c8fa92042218a9f2200f429b0bc0ca0e5969c2a781957c4"
            },
            dob: {
                date: "1980-10-10T10:39:59.986Z",
                age: 42
            },
            registered: {
                date: "2015-12-28T03:06:11.700Z",
                age: 7
            },
            phone: "(674) 247 0685",
            cell: "(680) 287 1227",
            id: {
                name: "NSS",
                value: "05 45 47 6302 0"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/97.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg"
            },
            nat: "MX"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Lærke",
                last: "Rasmussen"
            },
            location: {
                street: {
                    number: 8905,
                    name: "Aalborgvej"
                },
                city: "Nr Åby",
                state: "Nordjylland",
                country: "Denmark",
                postcode: 38813,
                coordinates: {
                    latitude: "-2.3648",
                    longitude: "-47.5884"
                },
                timezone: {
                    offset: "-4:00",
                    description: "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            email: "laerke.rasmussen@example.com",
            login: {
                uuid: "553b5953-d69f-41f0-aa6d-7cad48fba668",
                username: "whitemeercat349",
                password: "dogpound",
                salt: "miHEXgNL",
                md5: "59673d43f1b0641209ffd7b60d4eb1dc",
                sha1: "3e130cc4caba342aa938d42b86869dda7e27e5c3",
                sha256: "51398ef0920f0d0f6505e4d33acf2122397ab17211c3c837fcc895a516f28ec2"
            },
            dob: {
                date: "2000-07-26T12:58:19.916Z",
                age: 22
            },
            registered: {
                date: "2013-09-11T19:52:04.760Z",
                age: 9
            },
            phone: "59000706",
            cell: "36377352",
            id: {
                name: "CPR",
                value: "2607100-9918"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/11.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/11.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg"
            },
            nat: "DK"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Nevena",
                last: "Španović"
            },
            location: {
                street: {
                    number: 9983,
                    name: "Mihaila Šuškalovića "
                },
                city: "Požega",
                state: "Podunavlje",
                country: "Serbia",
                postcode: 14279,
                coordinates: {
                    latitude: "-37.8085",
                    longitude: "163.6083"
                },
                timezone: {
                    offset: "+9:00",
                    description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            email: "nevena.spanovic@example.com",
            login: {
                uuid: "fb55f504-c786-49cc-b98f-7b7ea991a3fb",
                username: "heavyelephant171",
                password: "robotics",
                salt: "CazMhTKj",
                md5: "5bb875933c82333638a084a34299c278",
                sha1: "d9126365ad8a8274886d94c3cdfca0ecd852769d",
                sha256: "7bc02cbbd829abfe2c3b11f3647f046adc116d51fd74f496e0fcc8c034ab7187"
            },
            dob: {
                date: "1965-10-03T02:46:17.419Z",
                age: 57
            },
            registered: {
                date: "2007-06-28T06:04:43.886Z",
                age: 15
            },
            phone: "015-2080-239",
            cell: "068-7204-362",
            id: {
                name: "SID",
                value: "070012195"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/78.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/78.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/78.jpg"
            },
            nat: "RS"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Cohen",
                last: "Martin"
            },
            location: {
                street: {
                    number: 7007,
                    name: "Sinclair Street"
                },
                city: "Taupo",
                state: "Hawke'S Bay",
                country: "New Zealand",
                postcode: 93300,
                coordinates: {
                    latitude: "-76.7041",
                    longitude: "126.3794"
                },
                timezone: {
                    offset: "-6:00",
                    description: "Central Time (US & Canada), Mexico City"
                }
            },
            email: "cohen.martin@example.com",
            login: {
                uuid: "ee6e359d-9dbd-4ad2-8fe9-d5db7d72645f",
                username: "yellowbear616",
                password: "grizzly",
                salt: "RDy3b8vZ",
                md5: "422de539ea21484bc4832976b532475c",
                sha1: "9badd3f72a021bad24389fe14089cbdb769894de",
                sha256: "1295117b34aab952bf3e3c98be391ac7639942f97d0027045b125cdbe9ddd1b1"
            },
            dob: {
                date: "1962-08-29T20:33:34.505Z",
                age: 60
            },
            registered: {
                date: "2020-02-21T02:54:13.710Z",
                age: 2
            },
            phone: "(766)-017-3490",
            cell: "(543)-409-2733",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/53.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg"
            },
            nat: "NZ"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Rimma",
                last: "Bahtalovskiy"
            },
            location: {
                street: {
                    number: 8424,
                    name: "Polovicka ploshcha"
                },
                city: "Irshava",
                state: "Vinnicka",
                country: "Ukraine",
                postcode: 14706,
                coordinates: {
                    latitude: "53.9439",
                    longitude: "-60.0174"
                },
                timezone: {
                    offset: "+6:00",
                    description: "Almaty, Dhaka, Colombo"
                }
            },
            email: "rimma.bahtalovskiy@example.com",
            login: {
                uuid: "33022b94-deb6-4723-b5a7-561d2eab6716",
                username: "yellowkoala390",
                password: "777777",
                salt: "ISJyNq2W",
                md5: "24bd188118b2224133c083e14851aec1",
                sha1: "98eb4ec1c45bf47fe2890116ffcce9ab28e65b72",
                sha256: "ddaaa10cdf6517ef91348915ebec3b03fbe614e94c3369b6b6313477471b8046"
            },
            dob: {
                date: "1947-10-31T00:08:58.729Z",
                age: 75
            },
            registered: {
                date: "2018-10-19T04:18:23.188Z",
                age: 4
            },
            phone: "(068) J89-3312",
            cell: "(097) U82-8982",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/22.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg"
            },
            nat: "UA"
        }
    ];

    public static getAllUsers():IUser[]{
        return this.users;
    }
}