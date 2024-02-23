import type { Schema, Attribute } from '@strapi/strapi';

export interface ChatConversations extends Schema.Component {
  collectionName: 'components_chat_conversations';
  info: {
    displayName: 'Conversations';
    icon: 'dashboard';
  };
  attributes: {
    role: Attribute.String;
    message: Attribute.String & Attribute.Required;
    media: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chat.conversations': ChatConversations;
    }
  }
}
