"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.epPlugin = void 0;
const epPlugin = {
    default: {
        ele: '',
        heading: 'OPPS! OUR SERVER IS ON BREAK',
        description: 'Something went wrong, We are looking to see what happened.',
        linkText: 'Go Back',
        linkURL: '/home'
    },
    createStyles() {
        const style = document.createElement('style');
        style.textContent = `
        .ep-page.red {
            background: #ffffff;
            width: 60%;
            border-radius: 10px;
            padding: 3%;
            margin: 0;
        }
        .ep-content h3 {
            margin-bottom: 30px;
            font-size: 35px;
            line-height: 40px;
            color: #1c0950;
            font-weight: 700;
            font-family: proxima-nova,sans-serif;
        }
        .ep-content p {
            margin-bottom: 40px;
            font-size: 1.3em;
        }
        
         .ep-block-button.large a.ep-block-button_link {
            font-size: 18px;
            line-height: 50px;
            font-weight: 500;
            letter-spacing: 0;
            text-transform: capitalize;
            border: 0;
            border-radius: 25px;
            background-color: #f7345e;
            color: #fff;
            text-decoration: none;
            padding: 10px 40px;
        }`;
        document.head.appendChild(style);
    },
    register(values) {
        var _a;
        this.createStyles();
        const params = Object.assign({}, this.default, values);
        const content = document.createElement("div");
        content.classList.add('ep-page', 'red', 'ep-content');
        const heading = document.createElement("h3");
        heading.innerText = params === null || params === void 0 ? void 0 : params.heading;
        const description = document.createElement("p");
        description.innerText = params === null || params === void 0 ? void 0 : params.description;
        const content_link = document.createElement("div");
        content_link.className = 'ep-buttons';
        const content_link_div = document.createElement("div");
        content_link_div.classList.add('ep-block-button', 'large');
        const link = document.createElement("a");
        link.innerText = params === null || params === void 0 ? void 0 : params.linkText;
        link.href = params === null || params === void 0 ? void 0 : params.linkURL;
        link.className = 'ep-block-button_link';
        content_link_div.appendChild(link);
        content_link.appendChild(content_link_div);
        content.append(heading, description, content_link);
        if (params.ele)
            (_a = document.getElementById(params.ele)) === null || _a === void 0 ? void 0 : _a.appendChild(content);
        else
            document.body.prepend(content);
    }
};
exports.epPlugin = epPlugin;
