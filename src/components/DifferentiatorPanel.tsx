import {
  Text,
  Field,
  withDatasourceCheck,
  ImageField,
  RichText as JssRichText,
  Image as JssImage,
  Placeholder,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DifferentiatorPanelProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    contentimage: ImageField;
  };
  rendering: ComponentRendering;
};

const DifferentiatorPanel = (props: DifferentiatorPanelProps): JSX.Element => {
  const hasImage = !!props.fields.contentimage?.value?.src;

  return (
    <section className="differentiator" role="complementary" aria-label="Panel">
      <div className="panel-container align-items-center">
        <div className={`content ${!hasImage ? 'full-width' : ''}`}>
          <h2>
            <Text field={props.fields.title} />
          </h2>

          <div className="description">
            <JssRichText className="description" field={props.fields.description} />
          </div>

          <Placeholder name="differentiator-cta" rendering={props.rendering} />
        </div>

        {hasImage && (
          <div className="media-show-in-desktop">
            <JssImage field={props.fields.contentimage} />
          </div>
        )}
      </div>
    </section>
  );
};

export default withDatasourceCheck()<DifferentiatorPanelProps>(DifferentiatorPanel);