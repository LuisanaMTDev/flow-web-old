import { LitElement, html, css } from 'lit';

export class TasksList extends LitElement {
    static styles = css`
    div {
        display: flex;
        align-items: start;
        gap: 0.3em;
    }

    div svg {
        stroke: gray;
    }

    details ul {
        margin-block: 10px;
    }

    details li {
        display: flex;
        align-items: center;
        gap: 0.3em;
    }

    details li img {
        height: 1em;
        width: 1em;
    }

    summary span {
        margin-left: 14em;
    }

    summary::marker {
        content: '';
    }
    `;

    static properties = {
        subject: { type: String },
        swTime: { type: String },
        stateIconLink: { type: String },
    };

    constructor() {
        super();
        this.subject = 'Subject';
        this.swTime = '00:00:00';
        this.stateIconLink = './assest/without-start-icon.svg';
    }

    render() {
        return html`
    <div>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"
            fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-clock-play">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 7v5l2 2" />
            <path d="M17 22l5 -3l-5 -3z" />
            <path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
        </svg>
        <details open @click=${this.disableCloseDetails}>
          <summary>${this.subject}
                <span>${this.swTime}</span>
          </summary>
          <ul>
            <li>
                    <img src=${this.stateIconLink} alt="state icon">
                Task
            </li>
          </ul>
        </details>
    </div>
    `;
    }

    /**
     * @param {MouseEvent} event
     */
    disableCloseDetails(event) {
        event.preventDefault();
    }
}
customElements.define('tasks-list', TasksList);
