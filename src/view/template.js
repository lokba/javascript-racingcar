export const getRacingCarItemTemplate = (carName) =>
  `
    <div class="racing_car_item">
      <div class="racing_car_name">${carName}</div>
      <ul class="racing_car_progress">
        <div class="loading"></div>
      </ul>
    </div>
  `;

export const PROGRESS_TEMPLATE = '<li>⬇</li>';