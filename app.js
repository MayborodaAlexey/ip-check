"use strict";

const button = document.getElementsByTagName('button')[0];
const url = 'https://api.ipify.org/?format=json';
const data = document.getElementById(`data`);

button.addEventListener('click', async (e) => {
    button.setAttribute('disabled', 'disabled');

    const myResponse = await fetch(url);
    const addressIP = await myResponse.json();

    const myResponse2 = await fetch(`http://ip-api.com/json/${addressIP.ip}`);
    const userInfo = await myResponse2.json();

    const {timezone, country, regionName, city, org} = userInfo;
    const timezoneDOM = document.createElement('p');
    const countryDOM = document.createElement('p');
    const regionNameDOM = document.createElement('p');
    const cityDOM = document.createElement('p');
    const organizationDOM = document.createElement('p');
    const container = document.createElement('div');
    container.className = 'user__info';

    timezoneDOM.textContent = timezone;
    countryDOM.textContent = country;
    regionNameDOM.textContent = regionName;
    cityDOM.textContent = city;
    organizationDOM.textContent = org;

    container.append(timezoneDOM, countryDOM, regionNameDOM, cityDOM, organizationDOM);
    data.prepend(container);
})
