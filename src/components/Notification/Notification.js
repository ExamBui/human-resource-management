import {
  notification
} from "antd";

function Notification(type, title, desc) {
  return notification[type]({
    message: title,
    description: desc,
  });
}

export default Notification;