class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    #
    #   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

    user ||= User.new

    alias_action :create, :read, :update, :edit, :new, to: :cru
    alias_action :create, :read, :update, :edit, :new, :destroy, to: :crud
    alias_action :create, :new, :read, to: :cr
    alias_action :read, :update, :edit, to: :ru

    if user.role? :admin
        can :manage, :all
    elsif user.role? :manager
        can :manage, :all
    elsif user.role? :shipper
        can :ru, User, id: user.id
        can :read, Order
        can :show, Item
        can :ru, OrderItem
        can :read, School
    elsif user.role? :customer
        can :ru, User, id: user.id
        can :cru, Order, user_id: user.id
        can :cr, School
    else
        can :create, User
    end

  end
end
