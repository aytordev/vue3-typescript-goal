import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import input from './input.vue';

describe('input', () => {
  it('placeholder should be render when prop is defined', async () => {
    render(input, { props: { placeholder: 'placeholder' } });

    const placeholder = screen.getByPlaceholderText('placeholder');

    expect(placeholder).toBeInTheDocument();
  });

  it('input should be disabled when prop is true', async () => {
    render(input, { props: { disabled: true } });

    const message = screen.getByLabelText('input');

    expect(message).toHaveAttribute('disabled');
  });
});
