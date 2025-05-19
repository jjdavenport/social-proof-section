import Content from '@/app/components/content';
import Footer from '@/app/components/footer';
import StarsItem from '@/app/components/stars-item';
import { render, screen } from '@testing-library/react-native';

describe('Content', () => {
  it('checks the heading text', () => {
    render(<Content />);
    expect(screen.queryByText('10,000+ of our users love our products.')).toBeVisible();
  });

  it('checks the paragraph text', () => {
    render(<Content />);
    expect(
      screen.queryByText(`
        We only provide great products combined with excellent customer service. See what our
          satisfied customers are saying about our services.
        `)
    ).toBeVisible();
  });
});

describe('Stars Item', () => {
  it('checks that 5 images are rendered', () => {
    const { getAllByTestId } = render(<StarsItem text="" className="" />);
    const imgs = getAllByTestId('star-img');
    expect(imgs).toHaveLength(5);
  });

  it('checks the image source is correct', () => {
    const { getAllByTestId } = render(<StarsItem text="" className="" />);
    const imgs = getAllByTestId('star-img');
    imgs.forEach((img) => {
      expect(img.props.source).toEqual(require('@/assets/images/icon-star.svg'));
    });
  });
});

describe('Footer', () => {
  it('checks the href of the frontend link', () => {
    const { getByRole } = render(<Footer />);
    const frontendLink = getByRole('link', { name: /frontend mentor/i });
    expect(frontendLink).toHaveProp('href', 'https://www.frontendmentor.io?ref=challenge');
  });

  it('checks the href of the github link', () => {
    const { getByRole } = render(<Footer />);
    const githubLink = getByRole('link', { name: /jjdavenport/i });
    expect(githubLink).toHaveProp('href', 'https://github.com/jjdavenport');
  });
});
