import '@nextcloud/dialogs/styles/toast.scss'
import 'datatables.net-dt/css/jquery.dataTables.css';
import '../css/mycss.less';


import DataTable from 'datatables.net';
import { globalConfiguration, loadDevisList, optionDatatable } from "./modules/mainFunction.mjs";
import './listener/main_listener';
import { Facture } from './objects/facture.mjs';

window.addEventListener('DOMContentLoaded', function () {
    globalConfiguration();

    var dt = new DataTable('.tabledt',optionDatatable);
    Facture.loadFactureDT(dt);

    dt.on('page search', loadDevisList);
});