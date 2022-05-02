import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/vue';
import item from './item.vue';

describe('item', () => {
  it('Emits an event that set as completed todo when checkbox was clicked', async () => {
    const { emitted } = render(item, {
      props: { todo: { id: 0, description: '', completed: false } },
    });

    const checkbox = screen.getByLabelText('checkbox');

    await userEvent.click(checkbox);

    expect(emitted().todoToBeChecked).toBeTruthy();
  });

  it('Emits an event that remove todo when checkbox was clicked', async () => {
    const { emitted } = render(item, {
      props: { todo: { id: 0, description: '', completed: false } },
    });
    const button = screen.getByLabelText('button');

    await userEvent.click(button);

    expect(emitted().todoToBeDeleted).toBeTruthy();
  });

  it('Emits an event that modify todo when input was submitted', async () => {
    const { emitted } = render(item, {
      props: { todo: { id: 0, description: '', completed: false } },
    });
    const label = screen.getByLabelText('label');

    await userEvent.dblClick(label);

    const input = screen.getByLabelText('input');

    await userEvent.type(input, 'test');

    await fireEvent.keyDown(input, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });

    expect(emitted().todoToBeModified).toBeTruthy();
  });
});
