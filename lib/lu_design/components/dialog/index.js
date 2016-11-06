import './_index.scss';
import sweetAlert from './sweetalert';
import lud from '../../lud_module';

lud.alert = sweetAlert;
lud.alert.success = (title,text)=>sweetAlert(title,text,'success');
lud.alert.danger = (title,text)=>sweetAlert(title,text,'error');
lud.alert.warning = (title,text)=>sweetAlert(title,text,'warning');
