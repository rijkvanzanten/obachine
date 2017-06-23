import html from 'choo/html';
import styles from './style.css';

export const modalSettings = {
  title: 'Bij welke locatie wil je zoeken?',
  children(id, value, emit) {
    return html`
      <form id=${id} onsubmit=${preventSubmit} onclick=${saveValues}>
        <select class=${styles.select} name="location">
          <option>Kies een locatie...</option>
          <option ${value === 'Centrale OBA' ? 'selected' : null} value="Centrale OBA">Centrale OBA</option>
          <option ${value === 'OBA Banne' ? 'selected' : null} value="OBA Banne">OBA Banne</option>
          <option ${value === 'OBA Bijlmer' ? 'selected' : null} value="OBA Bijlmer">OBA Bijlmer</option>
          <option ${value === 'OBA Bos en Lommer' ? 'selected' : null} value="OBA Bos en Lommer">OBA Bos en Lommer</option>
          <option ${value === 'OBA Buitenveldert' ? 'selected' : null} value="OBA Buitenveldert">OBA Buitenveldert</option>
          <option ${value === 'OBA Cinétol' ? 'selected' : null} value="OBA Cinétol">OBA Cinétol</option>
          <option ${value === 'OBA De Hallen' ? 'selected' : null} value="OBA De Hallen">OBA De Hallen</option>
          <option ${value === 'OBA Diemen' ? 'selected' : null} value="OBA Diemen">OBA Diemen</option>
          <option ${value === 'OBA Duivendrecht' ? 'selected' : null} value="OBA Duivendrecht">OBA Duivendrecht</option>
          <option ${value === 'OBA Geuzenveld' ? 'selected' : null} value="OBA Geuzenveld">OBA Geuzenveld</option>
          <option ${value === 'OBA Hagedoornplein' ? 'selected' : null} value="OBA Hagedoornplein">OBA Van der Pek</option>
          <option ${value === 'OBA Javaplein' ? 'selected' : null} value="OBA Javaplein">OBA Javaplein</option>
          <option ${value === 'OBA IJburg' ? 'selected' : null} value="OBA IJburg">OBA IJburg</option>
          <option ${value === 'OBA Linnaeus' ? 'selected' : null} value="OBA Linnaeus">OBA Linnaeus</option>
          <option ${value === 'OBA Mercatorplein' ? 'selected' : null} value="OBA Mercatorplein">OBA Mercatorplein</option>
          <option ${value === 'OBA Molenwijk' ? 'selected' : null} value="OBA Molenwijk">OBA Molenwijk</option>
          <option ${value === 'OBA Olympsich Kwartier' ? 'selected' : null} value="OBA Olympisch Kwartier">OBA Olympisch Kwartier</option>
          <option ${value === 'OBA Reigersbos' ? 'selected' : null} value="OBA Reigersbos">OBA Reigersbos</option>
          <option ${value === 'OBA Roelof Hartplein' ? 'selected' : null} value="OBA Roelof Hartplein">OBA Roelof Hartplein</option>
          <option ${value === 'OBA Slotermeer' ? 'selected' : null} value="OBA Slotermeer">OBA Slotermeer</option>
          <option ${value === 'OBA Slotervaart' ? 'selected' : null} value="OBA Slotervaart">OBA Slotervaart</option>
          <option ${value === 'OBA Spaarndammerbuurt' ? 'selected' : null} value="OBA Spaarndammerbuurt">OBA Spaarndammerbuurt</option>
          <option ${value === 'OBA Staatsliedenbuurt' ? 'selected' : null} value="OBA Staatsliedenbuurt">OBA Staatsliedenbuurt</option>
          <option ${value === 'OBA Waterlandplein' ? 'selected' : null} value="OBA Waterlandplein">OBA Waterlandplein</option>
        </select>
      </form>
    `;

    function saveValues(e) {
      const value = e.target.parentNode.querySelector('select').value;
      emit('updateValue', {
        id,
        value: value,
      });
    }

    function preventSubmit(e) {
      e.preventDefault();
      return false;
    }

  },
  color: '#e42C9e',
};

export default (state, emit, id) => {
  const {animating} = state.machineparts[id] || false;
  return html`
    <svg data-animating="${animating}" class=${styles.svg} xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 225">
      <defs>
        <rect id="a" width="75.717" height="34.023" x="120" y="103.274" rx="3"/>
        <rect id="b" width="71" height="71" rx="4"/>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(67)">
          <path fill="#4A4A4A" d="M0 9.997C0 4.477 4.468 0 10.002 0h186.996C202.522 0 207 4.47 207 10.002v129.996c0 5.524-4.472 10.002-10 10.002h-83.843c-2.764 0-5.004-2.235-5.004-5.003V104.51c0-2.764-2.234-5.003-5-5.003H5c-2.762 0-5-2.242-5-5.003V9.997z"/>
          <use fill="#FFF" xlink:href="#a"/>
          <rect width="74.717" height="33.023" x="120.5" y="103.774" stroke="#979797" rx="3"/>
          <path stroke="#E30111" d="M123.3 134.356l6.02-4.735 4.638 3.673 7.336-10.556 7.897 9.284 4.652-5.358 6.017 5.042 11.206-14.348 4.86 13.044 6.894-5.273 8.2 6.846"/>
          <path fill="#D8D8D8" d="M124 107h13v2h-13zM124 111h8v2h-8zM124 115h13v2h-13z"/>
        </g>
        <path fill="#9B9B9B" d="M228 150.557h24v43.373h-24z"/>
        <path fill="#4A4A4A" d="M227.795 150.557h11.795V196h-11.795z"/>
        <path fill="#4A4A4A" d="M217 149h44.82v9H217z"/>
        <path fill="#9B9B9B" d="M151 199v-16.003c0-3.312 2.688-5.997 5.993-5.997H251v17.008c0 2.757-2.23 4.992-4.993 4.992H151z"/>
        <path fill="#9B9B9B" d="M149 222.913h23v-44.87h-17.002c-3.313 0-5.998 2.69-5.998 6.005v38.865z"/>
        <path fill="#4A4A4A" d="M148.795 224.803h11.795V177h-6.793c-2.763 0-5.002 2.242-5.002 5.003v42.8z"/>
        <path fill="#4A4A4A" d="M137 225h44.82v-9.39H137zM149 199v-10h103.102v5c0 2.76-2.237 5-5.007 5H149z"/>
        <g class=${styles.compass} fill-rule="nonzero">
          <path fill="#26A6D1" d="M245.965 13C237.735 13 231 19.734 231 27.965c0 8.23 6.734 14.965 14.965 14.965 8.23 0 14.965-6.734 14.965-14.965 0-8.23-6.734-14.965-14.965-14.965zm0 27.124c-6.734 0-12.16-5.425-12.16-12.16 0-6.733 5.426-12.158 12.16-12.158s12.16 5.425 12.16 12.16c0 6.733-5.426 12.158-12.16 12.158z"/>
          <path fill="#E2574C" d="M253.728 20.202l-5.8 9.727-3.927-3.93 9.728-5.798z"/>
          <path fill="#E4E7E7" d="M238.202 35.728l9.727-5.8-3.93-3.927-5.798 9.728z"/>
        </g>
        <g class=${styles.compass} fill-rule="nonzero">
          <path fill="#26A6D1" d="M186.52 31.917c2.13 7.95 10.378 12.712 18.33 10.582 7.95-2.13 12.71-10.38 10.58-18.33-2.13-7.95-10.378-12.712-18.328-10.58-7.95 2.13-12.712 10.377-10.582 18.327zm26.2-7.02c1.743 6.504-2.093 13.148-8.598 14.89-6.504 1.744-13.148-2.092-14.89-8.596-1.744-6.504 2.092-13.148 8.596-14.89 6.505-1.744 13.15 2.092 14.892 8.597z"/>
          <path fill="#E2574C" d="M191.468 22.554l10.896 3.084-2.777 4.81-8.12-7.894z"/>
          <path fill="#E4E7E7" d="M210.483 33.533l-8.12-7.895-2.777 4.81 10.897 3.085z"/>
        </g>
        <g class=${styles.compass} fill-rule="nonzero">
          <path fill="#26A6D1" d="M190.37 58.418c-5.82 5.82-5.82 15.344 0 21.164 5.82 5.82 15.343 5.82 21.163 0s5.82-15.344 0-21.164c-5.82-5.82-15.344-5.82-21.164 0zm19.18 19.18c-4.763 4.762-12.435 4.762-17.197 0-4.762-4.762-4.762-12.434 0-17.196 4.762-4.762 12.434-4.76 17.196 0 4.76 4.762 4.76 12.434 0 17.196z"/>
          <path fill="#E2574C" d="M200.95 58.02L203.73 69h-5.555l2.778-10.98z"/>
          <path fill="#E4E7E7" d="M200.95 79.98L203.73 69h-5.555l2.778 10.98z"/>
        </g>
        <g class=${styles.compass} fill-rule="nonzero">
          <path fill="#26A6D1" d="M260.48 65.084c-2.13-7.95-10.378-12.712-18.328-10.582-7.95 2.13-12.712 10.378-10.582 18.33 2.13 7.95 10.378 12.71 18.328 10.58 7.95-2.13 12.713-10.378 10.582-18.328zm-26.2 7.02c-1.742-6.504 2.094-13.148 8.598-14.89 6.505-1.744 13.15 2.092 14.892 8.596 1.743 6.505-2.093 13.15-8.598 14.892-6.505 1.743-13.15-2.093-14.892-8.598z"/>
          <path fill="#E2574C" d="M255.533 74.447l-10.897-3.084 2.778-4.81 8.12 7.894z"/>
          <path fill="#E4E7E7" d="M236.517 63.468l8.12 7.895 2.777-4.81-10.897-3.085z"/>
        </g>
        <g fill-rule="nonzero" transform="translate(9 112)">
          <path fill="#4A4A4A" d="M98.342.25H75.327c-2.982 0-5.423 2.43-5.423 5.4v64.414H19.52c-1.99 0-3.616 1.62-3.616 3.598v9.536c0 1.98 1.627 3.598 3.615 3.598h80.63c1.99 0 3.616-1.62 3.616-3.598V5.648c0-2.97-2.44-5.398-5.424-5.398z"/>
          <path fill="#9B9B9B" d="M43.152.25h33.833v22.552H43.152z"/>
          <path fill="#4A4A4A" d="M85.6.25H62.586c-2.983 0-5.424 2.43-5.424 5.4v64.414H6.777c-1.988 0-3.615 1.62-3.615 3.598v9.536c0 1.98 1.627 3.598 3.615 3.598h80.63c1.99 0 3.617-1.62 3.617-3.598V5.648c0-2.97-2.44-5.398-5.424-5.398z"/>
          <path fill="#4A4A4A" d="M10.94 29.24c.46 2.798 3.164 5.086 6.012 5.086h25.545c2.848 0 5.554-2.288 6.013-5.085l3.923-23.904C52.893 2.54 50.94.25 48.09.25H11.358C8.51.25 6.556 2.54 7.016 5.336L10.94 29.24z"/>
          <path fill="#77B8E8" d="M47.228 46.982c-.336-1.95-2.24-3.547-4.227-3.547H16.455c-1.99 0-3.89 1.596-4.228 3.547l-3.37 19.534c-.335 1.95 1.017 3.547 3.006 3.547h35.73c1.99 0 3.34-1.596 3.005-3.547l-3.37-19.534z"/>
          <path fill="#A88D63" d="M50.596 66.516L48.86 56.44H10.594L8.857 66.515c-.336 1.95 1.016 3.547 3.004 3.547h35.732c1.99 0 3.34-1.596 3.004-3.547z"/>
          <path fill="#000" d="M14.264 36.965v1.076h-2.738C5.17 38.04 0 43.187 0 49.51v4.23c0 1.49 1.214 2.698 2.712 2.698 1.498 0 2.712-1.208 2.712-2.7v-4.227c0-3.347 2.737-6.072 6.102-6.072h9.713l.067-.003H45.19v-6.47H14.263z"/>
          <ellipse id=${styles.light} cx="79.339" cy="76.319" fill="#D16A70" rx="4.339" ry="4.319"/>
          <g>
            <path fill="#979797" d="M83.922 52.966c0 2.385-1.943 4.32-4.34 4.32-2.396 0-4.338-1.935-4.338-4.32v-29.96h8.678v29.96z"/>
            <g fill="#333E48">
              <path d="M80.235 52.253h3.686v1h-3.685zM77.98 48.665h5.942v1H77.98zM80.235 45.077h3.686v1h-3.685zM77.98 41.49h5.942v1H77.98zM80.235 37.902h3.686v1h-3.685zM77.98 34.314h5.942v1H77.98zM80.235 30.726h3.686v1h-3.685zM77.98 27.138h5.942v1H77.98z"/>
            </g>
          </g>
        </g>
        <g transform="translate(83 13)">
          <use fill="#FFF" xlink:href="#b"/>
          <rect width="69" height="69" x="1" y="1" stroke="#979797" stroke-width="2" rx="4"/>
          <g class=${styles.world} fill-rule="nonzero">
            <path fill="#45C1F1" d="M61.522 35.525L54.91 33.32c-1.286-.43-2.295-1.44-2.724-2.725l-1.652-4.953c-.614-1.844.08-3.87 1.7-4.95l2.65-1.766c.316-.21.52-.55.558-.927.037-.38-.096-.752-.363-1.02-2.314-2.32-5.038-4.227-8.062-5.585-.52-.233-1.135.07-1.29.616L43.26 20.7c-.33 1.162-1.134 2.132-2.216 2.67l-3.8 1.896c-.628.32-1.132.807-1.462 1.424l-.237.438.358 4.393c.047.583-.445 1.065-1.026 1.006l-6.02-.613c-1.78-.18-3.436-1.088-4.537-2.482-.995-1.25-1.43-2.78-1.232-4.3l1.692-11.843c.055-.386-.11-.768-.43-.992-.32-.22-.736-.244-1.08-.063C14.658 16.855 8.82 26.01 9.005 36.5l1.22.997 6.44-1.073c.182-.03.37-.042.555-.042 1.323 0 2.506.747 3.056 1.945 1.405 3.057 3.518 5.738 5.898 8.116l.875.874c1.313 1.312 1.638 3.318.808 4.98l-3.227 6.452c-.378.756-.066 1.705.71 2.04 2.51 1.084 5.21 1.794 8.043 2.068.41.04.807-.203.967-.584l4.3-10.235c.474-1.67.276-3.412-.452-4.872l-.813-1.625c-.83-1.658-.504-3.662.807-4.973l4.554-4.554-.106-.053 7.03 2.36c.853.283 1.545.886 1.95 1.694.403.807.468 1.72.182 2.573l-1.727 5.188c-.38 1.133-1.058 2.152-1.96 2.942l-10.48 10.596c-.597.604-.14 1.667.707 1.594 13.28-1.147 23.842-11.952 24.606-25.338.053-.917-.556-1.757-1.426-2.047z"/>
            <path fill="#44A4EC" d="M61.522 35.525l-6.612-2.208c-1.286-.428-2.295-1.436-2.724-2.722l-1.65-4.953c-.617-1.845.08-3.872 1.696-4.95l2.653-1.766c.315-.21.52-.55.557-.926.038-.38-.096-.752-.364-1.022-2.312-2.32-5.036-4.225-8.06-5.582-.52-.234-1.136.07-1.29.616L43.26 20.7c-.33 1.162-1.135 2.13-2.216 2.672l-3.798 1.894c-.518.26-.922.663-1.243 1.13v31.94l2.646-6.297c.474-1.67.276-3.412-.452-4.872l-.812-1.624c-.83-1.66-.505-3.662.806-4.973l4.554-4.553-.106-.053 7.03 2.36c.853.283 1.545.886 1.95 1.693.403.808.47 1.72.182 2.574l-1.727 5.188c-.38 1.134-1.058 2.152-1.96 2.943l-10.48 10.596c-.597.603-.14 1.668.707 1.595 13.28-1.146 23.84-11.952 24.606-25.338.053-.916-.556-1.757-1.426-2.047z"/>
            <g fill="#87D92B">
              <path d="M53.146 39.24c-.608-1.217-1.653-2.093-2.936-2.53l-6.817-2.262-5.77-2.904-.338-4.083c.17-.302.406-.54.71-.707l4.184-2.093c1.28-.606 2.226-1.753 2.598-3.137l2.8-9.887c-.438-.204-.877-.405-1.35-.61-.44-.167-.877-.335-1.35-.503-.438-.168-.877-.304-1.35-.44-2.395-.707-4.892-1.08-7.525-1.08-.573 0-1.147.033-1.72.066-1.722.102-3.375.372-5.03.777-.505.168-1.01.303-1.517.47-.507.173-1.013.34-1.518.542-.507.203-1.013.437-1.52.64-.505.235-.978.473-1.45.743l-1.823 12.655c-.27 1.957.304 3.948 1.586 5.57 1.385 1.752 3.443 2.866 5.67 3.103l6.85.71 4.388 2.19-3.375 3.376c-1.552 1.52-1.923 3.882-.945 5.84l1.114 2.227c.54 1.114.675 2.43.406 3.44L32.325 62.76c1.215.134 2.43.237 3.68.237.81 0 1.618-.033 2.428-.103h.034l10.765-10.93c1.114-.98 1.99-2.265 2.463-3.682l1.72-5.16c.44-1.282.34-2.667-.27-3.883z"/>
              <path d="M28.715 46.595l-1.452-1.45c-2.227-2.26-4.083-4.825-5.5-7.66-1.013-2.026-3.172-3.106-5.366-2.734L9.007 36c0 11.135 6.783 20.755 16.467 24.838l4.186-8.403c.977-1.958.607-4.32-.945-5.84z"/>
            </g>
            <g fill="#7FCC29">
              <path d="M39.918 36.47l-3.375 3.376c-.223.217-.366.484-.54.735v5.916l.71 1.417c.54 1.114.674 2.43.404 3.44l-1.114 2.65v8.994c.81 0 1.62-.033 2.43-.103h.034l10.764-10.93c1.115-.98 1.993-2.265 2.465-3.682l1.72-5.16c.44-1.283.34-2.667-.27-3.883-.607-1.217-1.652-2.093-2.935-2.532l-6.817-2.26-5.77-2.904-.338-4.083c.17-.302.405-.54.71-.707l4.184-2.093c1.28-.606 2.226-1.753 2.597-3.137l2.8-9.886c-.437-.205-.877-.406-1.35-.61-.438-.168-.876-.336-1.35-.504-.437-.168-.876-.303-1.348-.438-2.397-.71-4.894-1.08-7.527-1.08v25.512l3.915 1.954z"/>
              <path d="M54.97 16.833l-4.254 2.835c-1.89 1.25-2.733 3.644-1.99 5.803l2.025 6.074c.506 1.52 1.688 2.703 3.206 3.207l8.976 3.003C62.966 37.18 63 36.606 63 36c0-7.49-3.07-14.276-8.03-19.167z"/>
            </g>
          </g>
        </g>
        <path stroke="#979797" stroke-width="4" d="M89 137h39.897c2.76 0 4.997-2.243 4.997-5.01V84" stroke-linejoin="round"/>
      </g>
    </svg>`;
};
