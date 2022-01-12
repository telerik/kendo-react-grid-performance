/* tslint:disable */
export const REGIONS = [
    {
        "Region": "North America",
        "Countries": ["Canada", "United States", "Mexico"]
    },
    {
        "Region": "Middle East",
        "Countries": ["Turkey", "Iraq", "Saudi Arabia", "Syria", "UAE", "Israel", "Jordan", "Lebanon", "Oman", "Kuwait", "Qatar", "Bahrain", "Iran"]
    },
    {
        "Region": "Europe",
        "Countries": ["Russia", "Germany", "France", "United Kingdom", "Italy", "Spain", "Poland", "Romania", "Netherlands", "Belgium", "Greece",
            "Portugal", "Czech Republic", "Hungary", "Sweden", "Austria", "Switzerland", "Bulgaria", "Denmark", "Finland", "Slovakia", "Norway",
            "Ireland", "Croatia", "Slovenia", "Estonia", "Iceland",]
    },
    {
        "Region": "Africa",
        "Countries": ["Nigeria", "Ethiopia", "Egypt", "South Africa", "Algeria", "Morocco", "Cameroon", "Niger", "Senegal", "Tunisia", "Libya"]
    },
    {
        "Region": "Asia Pacific",
        "Countries": ["Afghanistan", "Australia", "Azerbaijan", "China", "Hong Kong", "India", "Indonesia",
            "Japan", "Malaysia", "New Zealand", "Pakistan", "Philippines", "Korea", "Singapore", "Taiwan", "Thailand"]
    },
    {
        "Region": "South America",
        "Countries": ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
    },

]

export const DealType = [
    "Buy", "Sell"
]

export const Contract = [
    "Forwards", "Futures", "Options", "Swap", "CFD"
]

export const Settlement = [
    "Deliverable", "Cash"
]

export const MOCKFINANCEDATA = [
    {
        "IndGrou": "Airlines",
        "IndSect": "Consumer, Cyclical",
        "IndSubg": "Airlines",
        "SecType": "PUBLIC",
        // tslint:disable-next-line:object-literal-sort-keys
        "CpnTyp": "FIXED",
        "IssuerN": "AMERICAN AIRLINES GROUP",
        "Moodys": "WR",
        "Fitch": "N.A.",
        "DBRS": "N.A.",
        "CollatT": "NEW MONEY",
        "Curncy": "USD",
        "Security": "001765866 Pfd",
        "sector": "Pfd",
        "CUSIP": "1765866",
        "Ticker": "AAL",
        "Cpn": "7.875",
        "Maturity": "7/13/1939",
        "KRD_3YR": 0.00006,
        "RISK_COUNTRY": "",
        "MUNI_SECTOR": "",
        "ZV_SPREAD": 28.302,
        "KRD_5YR": 0,
        "KRD_1YR": -0.00187,
        "PD_WALA": null
    }];

export const DATA = [
    {
        "Ticker": "OX",
        "Spread": 0.01,
        "Open Price": 1281.10,
        "Price": 1280.7317,
        "Buy": 1280.7267,
        "Sell": 1280.7367,
        "Change": -0.3683,
        "Change(%)": -0.0287,
        "Volume": 48387,
        "High(D)": 1289.50,
        "Low(D)": 1279.10,
        "High(Y)": 1306,
        "Low(Y)": 1047.20,
        "Start(Y)": 1176.60,
        "Change On Year(%)": 8.8502
    },
    {
        "Ticker": "USD",
        "Type": "Silver",
        "Spread": 0.01,
        "Open Price": 17.43,
        "Price": 17.42,
        "Buy": 17.43,
        "Sell": 17.43,
        "Change": -0.01,
        "Change(%)": -0.0574,
        "Volume": 11720,
        "High(D)": 17.51,
        "Low(D)": 17.37,
        "High(Y)": 18.06,
        "Low(Y)": 13.73,
        "Start(Y)": 15.895,
        "Change On Year(%)": 9.5942
    },
    {
        "Ticker": "SHIB",
        "Type": "Copper",
        "Spread": 0.02,
        "Open Price": 2.123,
        "Price": 2.113,
        "Buy": 2.123,
        "Sell": 2.123,
        "Change": -0.01,
        "Change(%)": -0.471,
        "Volume": 28819,
        "High(D)": 2.16,
        "Low(D)": 2.11,
        "High(Y)": 2.94,
        "Low(Y)": 1.96,
        "Start(Y)": 2.45,
        "Change On Year(%)": -13.7551
    },
    {
        "Ticker": "TETHERUS",
        "Type": "Platinum",
        "Spread": 0.01,
        "Open Price": 1071.60,
        "Price": 1071.0993,
        "Buy": 1071.0943,
        "Sell": 1071.1043,
        "Change": -0.5007,
        "Change(%)": -0.0467,
        "Volume": 3039,
        "High(D)": 1081.20,
        "Low(D)": 1070.50,
        "High(Y)": 1120.60,
        "Low(Y)": 812.40,
        "Start(Y)": 966.50,
        "Change On Year(%)": 10.8225
    },
    {
        "Ticker": "XEC",
        "Type": "Palladium",
        "Spread": 0.01,
        "Open Price": 600.55,
        "Price": 601.0005,
        "Buy": 600.9955,
        "Sell": 601.0055,
        "Change": 0.4505,
        "Change(%)": 0.075,
        "Volume": 651,
        "High(D)": 607.20,
        "Low(D)": 598.40,
        "High(Y)": 690,
        "Low(Y)": 458.6,
        "Start(Y)": 574.3,
        "Change On Year(%)": 4.6492
    },
    {
        "Ticker": "18C",
        "Type": "Oil",
        "Spread": 0.015,
        "Open Price": 45.54,
        "Price": 45.7899,
        "Buy": 45.7824,
        "Sell": 45.7974,
        "Change": 0.2499,
        "Change(%)": 0.5487,
        "Volume": 107196,
        "High(D)": 45.94,
        "Low(D)": 45.00,
        "High(Y)": 65.28,
        "Low(Y)": 30.79,
        "Start(Y)": 48.035,
        "Change On Year(%)": -4.6739
    },
    {
        "Ticker": "BITCOIN",
        "Type": "Brent",
        "Spread": 0.01,
        "Open Price": 46.06,
        "Price": 46.05,
        "Buy": 46.06,
        "Sell": 46.06,
        "Change": -0.01,
        "Change(%)": -0.0217,
        "Volume": 59818,
        "High(D)": 46.48,
        "Low(D)": 45.60,
        "High(Y)": 71.14,
        "Low(Y)": 30.02,
        "Start(Y)": 50.58,
        "Change On Year(%)": -8.9561
    },
    {
        "Ticker": "ETHERIUM",
        "Type": "Natural Gas",
        "Spread": 0.02,
        "Open Price": 2.094,
        "Price": 2.104,
        "Buy": 2.094,
        "Sell": 2.094,
        "Change": 0.01,
        "Change(%)": 0.4776,
        "Volume": 2783,
        "High(D)": 2.11,
        "Low(D)": 2.09,
        "High(Y)": 3.20,
        "Low(Y)": 1.84,
        "Start(Y)": 2.52,
        "Change On Year(%)": -16.5079
    },
    {
        "Ticker": "INCH",
        "Type": "RBOB Gas",
        "Spread": 0.015,
        "Open Price": 1.5086,
        "Price": 1.9532,
        "Buy": 1.9457,
        "Sell": 1.9607,
        "Change": 0.4446,
        "Change(%)": 29.4686,
        "Volume": 2646,
        "High(D)": 1.9532,
        "Low(D)": 1.50,
        "High(Y)": 2.05,
        "Low(Y)": 1.15,
        "Start(Y)": 1.60,
        "Change On Year(%)": 22.0727
    },
    {
        "Ticker": "BUSD",
        "Type": "Diesel",
        "Spread": 0.015,
        "Open Price": 1.3474,
        "Price": 1.3574,
        "Buy": 1.3474,
        "Sell": 1.3474,
        "Change": 0.01,
        "Change(%)": 0.7422,
        "Volume": 2971,
        "High(D)": 1.36,
        "Low(D)": 1.34,
        "High(Y)": 2.11,
        "Low(Y)": 0.92,
        "Start(Y)": 1.515,
        "Change On Year(%)": -10.4026
    },
    {
        "Ticker": "GBP",
        "Type": "Ethanol",
        "Spread": 0.01,
        "Open Price": 1.512,
        "Price": 2.7538,
        "Buy": 2.7488,
        "Sell": 2.7588,
        "Change": 1.2418,
        "Change(%)": 82.1323,
        "Volume": 14,
        "High(D)": 2.7538,
        "Low(D)": 1.1168,
        "High(Y)": 2.7538,
        "Low(Y)": 1.1168,
        "Start(Y)": 1.475,
        "Change On Year(%)": 86.7011
    },
    {
        "Ticker": "EUR",
        "Type": "Uranium",
        "Spread": 0.02,
        "Open Price": 27.55,
        "Price": 27.58,
        "Buy": 27.55,
        "Sell": 27.55,
        "Change": 0.03,
        "Change(%)": 0.1089,
        "Volume": 12,
        "High(D)": 27.55,
        "Low(D)": 27.55,
        "High(Y)": 29.32,
        "Low(Y)": 21.28,
        "Start(Y)": 25.30,
        "Change On Year(%)": 9.0119
    }
];

/* tslint:enable */
export class FinancialData {
    generateData(count) {
        console.time('generateData');
        const currData = [];
        for (let i = 0; i < count; i++) {
            const rand = Math.floor(Math.random() * Math.floor(DATA.length));
            const dataObj = Object.assign({}, DATA[rand]);

            dataObj.Settlement = Settlement[this.generateRandomNumber(0, 1)];
            dataObj.Contract = Contract[this.generateRandomNumber(0, 4)];
            const region = REGIONS[this.generateRandomNumber(0, 5)];
            dataObj.Region = region.Region;
            dataObj.Country = this.randomizeCountry(region);
            // for (let y = 0; y < 80; y++) {
            //     dataObj["Text" + y] = "Text";
            // }

            for (const mockData of MOCKFINANCEDATA) {
                for (const prop in mockData) {
                    if (mockData.hasOwnProperty(prop)) {
                        dataObj[prop] = mockData[prop];
                    }
                }
            }

            dataObj.ID = i;
            this.randomizeObjectData(dataObj);
            currData.push(dataObj);
        }
        console.timeEnd('generateData');
        return currData;
    }

    updateAllPrices(data) {
        const currData = [];
        for (const dataRow of data) {
            const dataObj = Object.assign({}, dataRow);
            this.randomizeObjectData(dataObj);
            currData.push(dataObj);
        }
        return currData;
    }

    updateRandomPrices(data) {
        const currData = data.slice(0, data.length + 1);
        let y = 0;
        for (let i = Math.round(Math.random() * 10); i < data.length; i += Math.round(Math.random() * 10)) {
            const dataObj = Object.assign({}, data[i]);
            this.randomizeObjectData(dataObj);
            currData[i] = dataObj;
            y++;
        }
        // return {data: currData, recordsUpdated: y };
        return currData;
    }

    updateRandomPrices2(data) {
        const currData = data.slice(0, data.length + 1);
        let y = 0;
        for (let i = Math.round(Math.random() * 10); i < data.length; i += Math.round(Math.random() * 10)) {
            const dataObj = Object.assign({}, data[i]);
            this.randomizeObjectData(dataObj);
            currData[i] = dataObj;
            y++;
        }
        return { data: currData, recordsUpdated: y };
    }

    randomizeObjectData(dataObj) {
        const changeP = 'Change(%)';
        const res = this.generateNewPrice(dataObj.Price);
        dataObj.Change = res.Price - dataObj.Price;
        dataObj.Price = res.Price;
        dataObj[changeP] = res.ChangePercent;
    }

    generateNewPrice(oldPrice) {
        const rnd = parseFloat(Math.random().toFixed(2));
        const volatility = 2;
        let newPrice = 0;

        let changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) {
            changePercent -= (2 * volatility);
        }

        const changeAmount = oldPrice * (changePercent / 100);
        newPrice = oldPrice + changeAmount;

        const result = { Price: 0, ChangePercent: 0 };
        result.Price = parseFloat(newPrice.toFixed(2));
        result.ChangePercent = parseFloat(changePercent.toFixed(2));

        return result;
    }

    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomizeCountry(region) {
        let country;
        switch (region.Region) {
            case 'North America': {
                country = region.Countries[this.generateRandomNumber(0, 2)];
                break;
            }
            case 'South America': {
                country = region.Countries[this.generateRandomNumber(0, 11)];
                break;
            }
            case 'Europe': {
                country = region.Countries[this.generateRandomNumber(0, 26)];
                break;
            }
            case 'Asia Pacific': {
                country = region.Countries[this.generateRandomNumber(0, 15)];
                break;
            }
            case 'Africa': {
                country = region.Countries[this.generateRandomNumber(0, 11)];
                break;
            }
            case 'Middle East': {
                country = region.Countries[this.generateRandomNumber(0, 12)];
                break;
            }
            default:
                break;
        }
        return country;
    }
}