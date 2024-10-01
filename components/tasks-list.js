import { LitElement, html, css } from 'lit';

export class TasksList extends LitElement {
    static styles = css`
    details ul {
        margin-block: 10px;
    }

    details li {
        display: flex;
        align-items: center;
    }

    details li::before {
        content: '\\f111';
        font-family: 'Font Awesome 6 Free';
        font-size: 9px;
        padding: 4px;
        padding-top: 5px;
    }
    summary span {
        margin-left: 14em;
    }

    summary::marker {
        content: '';
    }

    summary::before {
        content: '\\f144';
        font-family: 'Font Awesome 6 Free';
        color: gray;
        padding: 5px;
    }
    `;

    static properties = {
        subject: { type: String },
        swTime: { type: String },
    };

    constructor() {
        super();
        this.subject = 'Subject';
        this.swTime = '00:50:35';
    }

    render() {
        return html`
    <details open @click=${this.disableCloseDetails}>
      <summary>${this.subject}
            <span>${this.swTime}</span>
      </summary>
      <ul>
        <li>Task</li>
      </ul>
    </details>
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
