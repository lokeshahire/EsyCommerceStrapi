import type { Schema, Struct } from '@strapi/strapi';

export interface Card1HomeEnhanceCard extends Struct.ComponentSchema {
  collectionName: 'components_card1_home_enhance_cards';
  info: {
    description: '';
    displayName: 'HomeEnhanceCard';
    icon: 'book';
  };
  attributes: {
    HomeEnhanceCardHead: Schema.Attribute.String;
    HomeEnhanceCardImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    HomeEnhanceCardImgURL: Schema.Attribute.String;
    HomeEnhanceCardLi1: Schema.Attribute.String;
    HomeEnhanceCardLi2: Schema.Attribute.String;
    HomeEnhanceCardLi3: Schema.Attribute.String;
    HomeEnhanceCardLi4: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card1.home-enhance-card': Card1HomeEnhanceCard;
    }
  }
}
