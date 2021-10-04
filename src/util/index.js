const icons = [
    { code: "01", iconClass: "wi-day-sunny" },
    { code: "02", iconClass: "wi-day-cloudy" },
    { code: "03", iconClass: "wi-cloudy" },
    { code: "04", iconClass: "wi-cloudy" },
    { code: "09", iconClass: "wi-rain-mix" },
    { code: "10", iconClass: "wi-rain" },
    { code: "11", iconClass: "wi-thunderstorm" },
    { code: "13", iconClass: "wi-snow" },
    { code: "50", iconClass: "wi-dust" },
]

export const getIcon = (icon) => {
    let className = null;
    let found = false;
    let i = 0;

    while (!found && i < icons.length) {
        if (icon.slice(0, 2) === icons[i].code) {
            found = true;
            className = icons[i].iconClass;
        }
        i++;
    }

    return className;
}